const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getByID = async (boardId, id) => tasksRepo.getByID(boardId, id);

const create = async (elem) => {
  tasksRepo.create(elem);
  return elem;
};

const update = (id, elem) => tasksRepo.update(id, elem);

const kick = (id) => tasksRepo.kick(id);

module.exports = { getAll, getByID, create, update, kick };
