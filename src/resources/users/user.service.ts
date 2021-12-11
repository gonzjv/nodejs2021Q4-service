import { IUserToPost, IUserToPut } from '../../interfaces/user.interface';
import * as usersRepo from './user.memory.repository';

const getAll = () => usersRepo.getAll();

const getUserByID = (userID: string) => usersRepo.getUserByID(userID);

const create = (user: IUserToPost) => {
  usersRepo.create(user);
  return user;
};

const update = (userId: string, user: IUserToPut) =>
  usersRepo.update(userId, user);

const kick = (userId: string) => usersRepo.kick(userId);

export { getAll, getUserByID, create, update, kick };
