import {
  Icon,
  IconButton,
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
}) => {
  const theme = useTheme();
  const { toggleDrawer } = useDrawer();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        sx={{
          paddingX: 3,
          paddingY: 1,
          height: theme.spacing(12),
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.palette.background.paper,
          gap: 2,
        }}>
        {smDown && (
          <IconButton onClick={toggleDrawer}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>Toolbar</Box>
      <Box>{children}</Box>
    </Box>
  );
};
