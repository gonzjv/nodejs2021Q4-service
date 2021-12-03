const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserByID = (userID) => usersRepo.getUserByID(userID);

const create = (user) => {
  usersRepo.create(user);
  return user;
};

const update = (userId, user) => usersRepo.update(userId, user);

module.exports = { getAll, getUserByID, create, update };
