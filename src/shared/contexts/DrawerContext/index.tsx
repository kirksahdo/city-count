import { useContext } from 'react';
import { createContext, useState, useCallback } from 'react';

import { IDrawerContextData, Props } from './interfaces';


const DrawerContext = createContext<IDrawerContextData>({} as IDrawerContextData);

const DrawerProvider: React.FC<Props> = ({ children })=> {

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <DrawerContext.Provider value={{isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawer = () => {
  const context = useContext(DrawerContext);
  return context;
};

export {useDrawer, DrawerProvider};
