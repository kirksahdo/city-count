import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { ThemeProvider } from './shared/contexts';

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
