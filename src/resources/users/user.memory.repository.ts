import { IUser } from '../../interfaces/user.interface';
import UserError from '../../error-handlers/user-error';
import { tasks, users } from '../in-memory-db';
import User from './user.model';
import * as taskService from '../tasks/task.service';

const getAll = async () => users;

const getUserByID = async (userID: string): Promise<Required<IUser>> => {
  const user = users.find((elem) => elem.id === userID);
  if (!user) {
    throw new UserError('User does not exist');
  }
  return user;
};

const create = async (user: Required<IUser>) => {
  users.push(user);
};

const update = async (oldId: string, user: IUser) => {
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
    tasks.map(async (task) => {
      if (task.userId === userToDelete.id) {
        const unAssignedTask = task;
        unAssignedTask.userId = null;
        await taskService.update(task.id, task.boardId, unAssignedTask);
      }
    });
  }
};

export { getAll, getUserByID, create, update, kick };
