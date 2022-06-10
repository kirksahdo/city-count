import { useContext } from 'react';
import { createContext, useState, useCallback } from 'react';

import { IDrawerContextData, IDrawerOption, Props } from './interfaces';


const DrawerContext = createContext<IDrawerContextData>({} as IDrawerContextData);

const DrawerProvider: React.FC<Props> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, [isDrawerOpen]);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, [drawerOptions]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawer = () => {
  const context = useContext(DrawerContext);
  return context;
};

export { useDrawer, DrawerProvider };
