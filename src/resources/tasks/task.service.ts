// const tasksRepo = require('./task.memory.repository');
import ITask from '../../interfaces/task.interface';
import * as tasksRepo from './task.memory.repository';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);

// const getByID = async (boardId, id) => tasksRepo.getByID(boardId, id);

const create = async (elem: Required<ITask>) => {
  tasksRepo.create(elem);
  return elem;
};

// const update = (id, elem) => tasksRepo.update(id, elem);

// const kick = (id) => tasksRepo.kick(id);

// module.exports = { getAll, getByID, create, update, kick };

// export { getAll, getByID, create, update, kick };
export { getAll, create };
