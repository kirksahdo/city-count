import { Enviroment } from '../../../environment';
import { api } from '../axios-config';
import { IUserDetail, IUserListing, TUserWithTotalCount } from './interfaces';

const getAll = async (
  page = 1,
  filter = '',
): Promise<TUserWithTotalCount | Error> => {
  try {
    const relativeURL = `/users?_page=${page}&_limit=${Enviroment.LINES_LIMIT}&completeName_like=${filter}`;
    const { data, headers } = await api.get(relativeURL);
    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count']) || Enviroment.LINES_LIMIT,
      };
    }
    return new Error('Registers listing error!');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Registers listing error!',
    );
  }
};

const getById = async (id: number): Promise<IUserDetail | Error> => {
  try{
    const relativeURL = `/users/${id}`;
    const { data } = await api.get(relativeURL);
    if (data) {
      const { id, completeName, email, cityId } = data;
      return {
        id,
        completeName,
        email,
        cityId,
      };
    }
    return new Error('User not found');
  } catch (error) {
    console.error(error);
    return new Error((error as {message: string}).message || 'Registers error!');
  }
};

// const create = async (): Promise<any> => {};

// const updateById = async (): Promise<any> => {};

// const deleteById = async (): Promise<any> => {};

export const userService = {
  getAll,
  getById,
  // create,
  // updateById,
  // deleteById,
};