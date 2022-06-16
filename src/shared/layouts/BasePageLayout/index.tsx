import {
  Divider,
  Icon,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';

import { useDrawer } from '../../contexts';
import { IBasePageLayoutProps } from './interfaces';

export const BasePageLayout: React.FC<IBasePageLayoutProps> = ({
  children,
  title,
  toolBar,
}) => {
  const theme = useTheme();
  const { toggleDrawer } = useDrawer();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box
        component={Paper}
        elevation={0}
        sx={{
          paddingX: 3,
          paddingY: 1,
          height: theme.spacing(smDown ? 6 : 8),
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {smDown && (
          <IconButton onClick={toggleDrawer}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : 'h4'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>  
      {toolBar && (
        <>
          <Divider />
          <Box>{toolBar}</Box>
        </>
      )}
      <Divider />
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
