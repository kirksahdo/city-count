
export interface Props{
  children: React.ReactNode
}

export interface IListItemLinkProps{
  icon: string,
  label: string,
  to: string,
  onClick: (() => void ) | undefined
}