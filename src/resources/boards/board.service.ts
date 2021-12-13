// const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getByID = (id) => boardsRepo.getByID(id);

const create = (elem) => {
  boardsRepo.create(elem);
  return elem;
};

const update = (id, elem) => boardsRepo.update(id, elem);

const kick = (id) => boardsRepo.kick(id);

// module.exports = { getAll, getByID, create, update, kick };
