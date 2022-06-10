export interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
};

export interface Props {
  children: React.ReactNode;
};

export interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
};