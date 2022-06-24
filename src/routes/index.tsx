import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Cities } from '../pages';
import { useDrawer } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawer();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/',
      },
      {
        label: 'Cities',
        icon: 'location_city',
        path: '/cities',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cities" element={<Cities />} />
      {/* <Route path="/cities/detail/:id" element={<Cities />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
