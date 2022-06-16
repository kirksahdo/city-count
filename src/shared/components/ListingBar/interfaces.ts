export interface IAppBarProps {
  searchText?: string;
  showInputSearch?: boolean;
  onChangeSearchText?: (newText: string) => void
  onClickAdd?: () => void
}