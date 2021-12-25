import { IUser } from '../../interfaces/user.interface';
import UserError from '../../error-handlers/user-error';
import { tasks, users } from '../in-memory-db';
import User from './user.model';
import * as taskService from '../tasks/task.service';

/**
 * Returns all users from database.
 *
 * @returns all user from database
 */
const getAll = async () => users;

/**
 * Returns user by ID
 *
 * @param userID - ID of user
 * @returns object with user data
 */
const getUserByID = async (
  userID: string
): Promise<Required<IUser>> => {
  const user = users.find((elem) => elem.id === userID);
  if (!user) {
    throw new UserError('User does not exist');
  }
  return user;
};

/**
 * Add new user to array of users in database
 *
 * @param user - object with user data
 *
 */
const create = async (user: Required<IUser>) => {
  users.push(user);
};

/**
 * Update user in database
 *
 * @param id - current ID of user
 * @param user - object with user data
 * @returns object with updated user data
 */
const update = async (id: string, user: IUser) => {
  const oldUser = await getUserByID(id);
  if (oldUser) {
    users[users.indexOf(oldUser)] = User.toPut(id, user);
  }

  return getUserByID(id);
};

/**
 * Delete user from database and unassign user tasks
 *
 * @param userId - ID of user to delete
 */
const kick = async (userId: string) => {
  const userToDelete = await getUserByID(userId);
  if (userToDelete) {
    const index = users.indexOf(userToDelete);
    users.splice(index, 1);
    tasks.map(async (task) => {
      if (task.userId === userToDelete.id) {
        const unAssignedTask = task;
        unAssignedTask.userId = null;
        await taskService.update(
          task.id,
          task.boardId,
          unAssignedTask
        );
      }
    });
  }
};

export { getAll, getUserByID, create, update, kick };
