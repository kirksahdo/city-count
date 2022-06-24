export type TUserWithTotalCount = {
  data: IUserListing[];
  totalCount: number;
};

export interface IUserListing {
  id: string;
  completeName: string;
  email: string;
  cityId: string;
}

export interface IUserDetail {
  id: string;
  completeName?: string;
  email?: string;
  cityId?: string;
}
