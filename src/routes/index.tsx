import { Button } from '@mui/material';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDrawer } from '../shared/contexts';

export const AppRoutes = () => {

  const {toggleDrawer, setDrawerOptions} = useDrawer();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/'
      },
      {
        label: 'City',
        icon: 'city',
        path: '/city'
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Button variant="contained" color="primary" onClick={toggleDrawer}>Toggle Drawer</Button> } />
      <Route path="/city" element={ <Button variant="contained" color="primary" onClick={toggleDrawer}>Toggle Drawer</Button> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
};