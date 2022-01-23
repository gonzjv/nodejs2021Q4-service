import { ITask } from '../../interfaces/task.interface';
import { tasks } from '../in-memory-db';
import Task from './task.model';

/**
 * Returns all tasks of board by board ID from datatbase
 *
 * @param boardId - ID of board
 * @returns array of all tasks from database
 */
const getAll = async (boardId: string) =>
  tasks.filter((task) => task.boardId === boardId);

/**
 *Returns task from database by ID and board ID
 *
 * @param boardId - board ID
 * @param id - task ID
 * @returns object with task data
 */
const getByID = async (boardId: string, id: string) =>
  tasks.find((task) => task.boardId === boardId && task.id === id);

/**
 *Add new task in array of taks in database
 *
 * @param task - object with task data
 */
const create = async (task: Required<ITask>) => {
  tasks.push(task);
};

/**
 * Update task data in database
 *
 * @param oldId - task ID
 * @param boardId - board ID
 * @param task - object with updated task data
 * @returns updated task object
 */
const update = async (oldId: string, boardId: string, task: ITask) => {
  const oldTask = await getByID(boardId, oldId);
  if (oldTask) {
    tasks[tasks.indexOf(oldTask)] = Task.toPut(oldId, task);
  }

  return getByID(boardId, oldId);
};

/**
 * Delete task from database
 *
 * @param id - ID of task to delete
 * @param boardId - ID of board where task is
 */
const kick = async (id: string, boardId: string) => {
  const elemToDelete = await getByID(boardId, id);
  if (elemToDelete) {
    const index = tasks.indexOf(elemToDelete);
    tasks.splice(index, 1);
  }
};

export { getAll, create, getByID, update, kick };
