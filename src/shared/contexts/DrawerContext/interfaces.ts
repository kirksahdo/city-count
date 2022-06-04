export interface IDrawerContextData{
  isDrawerOpen: boolean;
  toggleDrawer: () => void
}

export interface Props {
  children: React.ReactNode;
}