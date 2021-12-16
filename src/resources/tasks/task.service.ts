// const tasksRepo = require('./task.memory.repository');
import ITask from '../../interfaces/task.interface';
import * as tasksRepo from './task.memory.repository';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);

const getByID = async (boardId: string, id: string) =>
  tasksRepo.getByID(boardId, id);

const create = async (elem: Required<ITask>) => {
  tasksRepo.create(elem);
  return elem;
};

const update = (id: string, boardId: string, elem: ITask) =>
  tasksRepo.update(id, boardId, elem);

// const kick = (id) => tasksRepo.kick(id);

// module.exports = { getAll, getByID, create, update, kick };

// export { getAll, getByID, create, update, kick };
export { getAll, create, getByID, update };
