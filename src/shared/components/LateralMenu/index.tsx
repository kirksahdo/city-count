import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

import { useDrawer } from '../../contexts';
import { Props, IListItemLinkProps } from './interfaces';
import { useTheme as useThemeContext } from '../../contexts';
import { DarkTheme } from '../../themes';

const ListItemLink: React.FC<IListItemLinkProps> = ({
  icon,
  label,
  to,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch(resolvedPath.pathname);

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const LateralMenu: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { theme: appTheme , toggleTheme } = useThemeContext();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawer, drawerOptions } = useDrawer();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawer}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: theme.spacing(20),
            }}>
            <Avatar
              sx={{
                bgcolor: '#43a42f',
                width: theme.spacing(12),
                height: theme.spacing(12),
                marginBottom: theme.spacing(2),
              }}>
              K
            </Avatar>
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
            }}>
            <List
              component="nav"
              aria-label="main mailbox folders"
              sx={{ padding: 0 }}>
              {drawerOptions?.map(({ icon, label, path }) => (
                <ListItemLink
                  key={path}
                  icon={icon}
                  label={label}
                  to={path}
                  onClick={smDown ? toggleDrawer : undefined}
                />
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <List
              component="nav"
              aria-label="main mailbox folders"
              sx={{ padding: 0 }}>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>{appTheme == DarkTheme ? 'toggle_on' : 'toggle_off'}</Icon>
                </ListItemIcon>
                <ListItemText primary="Dark Mode" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100%" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
