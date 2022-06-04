import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { LateralMenu } from './shared/components';
import { ThemeProvider } from './shared/contexts';
import { DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
        </BrowserRouter>
      </DrawerProvider>
    </ThemeProvider>
  );
};

