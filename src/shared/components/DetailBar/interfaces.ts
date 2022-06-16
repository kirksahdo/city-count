export interface IDetailBarProps{
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
  loadingNewButton?: boolean;
  loadingBackButton?: boolean;
  loadingDeleteButton?: boolean;
  loadingSaveButton?: boolean;
  loadingSaveCloseButton?: boolean;
}