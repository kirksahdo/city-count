export interface ISplitButtonProps{
  options: {
    label: string,
    onClick?: () => void,
    iconName: string
  }[];
}