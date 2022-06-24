import { v4 as uuid } from 'uuid';

import { Enviroment } from '../../../environment';
import { api } from '../axios-config';
import { IUserDetail, TUserWithTotalCount } from './interfaces';

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

const getById = async (id: string): Promise<IUserDetail | Error> => {
  try {
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
    return new Error(
      (error as { message: string }).message || 'Error in user register!',
    );
  }
};

const create = async (
  user: Omit<IUserDetail, 'id'>,
): Promise<string | Error> => {
  try {
    const relativeURL = '/users';
    const { completeName, email, cityId } = user;
    const userData = {
      id: uuid(),
      completeName,
      email,
      cityId,
    };
    const { data } = await api.post<IUserDetail>(relativeURL, userData);
    if (data) {
      return data.id;
    }
    return new Error('Error on create user!');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Error on create user!',
    );
  }
};

const updateById = async (user: IUserDetail): Promise<void | Error> => {
  try {
    const { id } = user;
    const oldUserData = await getById(id);
    if (oldUserData instanceof Error) throw oldUserData;
    const relativeURL = `/users/${id}`;
    const newUserData = {
      completeName: user.completeName || oldUserData.completeName,
      email: user.email || oldUserData.email,
      cityId: user.cityId || oldUserData.cityId,
    };
    await api.put(relativeURL, newUserData);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Error on user update!',
    );
  }
};

const deleteById = async (id: string): Promise<void | Error> => {
  try {
    const relativeURL = `/users/${id}`;
    await api.delete(relativeURL);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Error on delete user!',
    );
  }
};

export const userService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
