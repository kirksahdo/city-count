import { TUserWithTotalCount } from '../../services/api/users/interfaces';

export interface IUsersTableProps {
  data: TUserWithTotalCount;
  page?: number;
  onPreviousPage?: () => void;
  onNextPage?: () => void;
}
