export interface IDetailBarProps {
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveCloseButton?: boolean;
  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
  onClickSaveClose?: () => void;
  loading?: boolean;
}

export interface IButtonProps {
  label: string;
  iconName: string;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  show: boolean;
  loading: boolean;
  width: number;
  height: number;
  divider?: boolean;
}
