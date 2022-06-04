import { Button } from '@mui/material';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDrawer } from '../shared/contexts';

export const AppRoutes = () => {

  const {toggleDrawer} = useDrawer();

  return (
    <Routes>
      <Route path="/" element={ <Button variant="contained" color="primary" onClick={toggleDrawer}>Toggle Drawer</Button> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
};