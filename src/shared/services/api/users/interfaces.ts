export type TUserWithTotalCount = {
  data: IUserListing[];
  totalCount: number
}

export interface IUserListing {
  id: number;
  completeName: string;
  email: string;
  cityId: number;
}

export interface IUserDetail {
  id: number;
  completeName: string;
  email: string;
  cityId: number;
}