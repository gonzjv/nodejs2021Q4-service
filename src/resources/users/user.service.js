const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserByID = (userID) => usersRepo.getUserByID(userID);

const create = (user) => {
  usersRepo.create(user);
  return user;
};

module.exports = { getAll, getUserByID, create };
