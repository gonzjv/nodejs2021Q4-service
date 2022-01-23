import { IUser } from '../../interfaces/user.interface';
import * as usersRepo from './user.repository';

const getAll = () => usersRepo.getAll();

const getUserByID = (userID: string) => usersRepo.getUserByID(userID);

const create = (user: Required<IUser>) => {
  usersRepo.create(user);
  return user;
};

const update = (userId: string, user: IUser) =>
  usersRepo.update(userId, user);

const kick = (userId: string) => usersRepo.kick(userId);

export { getAll, getUserByID, create, update, kick };
