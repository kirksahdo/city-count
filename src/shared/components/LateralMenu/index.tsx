import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawer } from '../../contexts';
import { Props } from './interfaces';

export const LateralMenu: React.FC<Props> = ({children}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return(
    <>
      <Drawer 
        open={isDrawerOpen}
        variant={smDown ? 'temporary':'permanent'}
        onClose={toggleDrawer}>
        <Box 
          width={theme.spacing(28)}
          height= '100%'
          display= 'flex'
          flexDirection='column'>
          <Box
            sx={
              {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: theme.spacing(20)
              }}>
            <Avatar 
              sx={ 
                {
                  bgcolor: '#43a42f',
                  width: theme.spacing(12),
                  height: theme.spacing(12),
                  marginBottom: theme.spacing(2)
                }}> 
              K
            </Avatar>
          </Box>
          <Divider  />
          <Box
            sx={
              {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
              }
            }>
            <List component="nav" aria-label="main mailbox folders" sx={{padding: 0}}>
              <ListItemButton
                selected={false}
                onClick={(event) => event}
              >
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>
      <Box marginLeft={ smDown ? 0 : theme.spacing(28)} >
        {children}
      </Box>
    </> 
  );
};