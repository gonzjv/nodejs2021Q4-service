import { IUserToPost, IUserToPut } from '../../interfaces/user.interface';
import { users } from '../in-memory-db';
import User from './user.model';

const getAll = async () => users;

const getUserByID = async (userID: string) =>
  users.find((user) => user.id === userID);

const create = async (user: IUserToPost) => {
  users.push(user);
};

const update = async (oldId: string, user: IUserToPut) => {
  const oldUser = await getUserByID(oldId);
  if (oldUser) {
    users[users.indexOf(oldUser)] = User.toPut(oldId, user);
  }

  return getUserByID(oldId);
};

const kick = async (userId: string) => {
  const userToDelete = await getUserByID(userId);
  if (userToDelete) {
    const index = users.indexOf(userToDelete);
    users.splice(index, 1);
  }
};

export { getAll, getUserByID, create, update, kick };
