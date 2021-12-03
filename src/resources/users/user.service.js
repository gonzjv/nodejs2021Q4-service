const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserByID = (userID) => usersRepo.getUserByID(userID);

const create = (user) => {
  usersRepo.create(user);
  return user;
};

const update = (userId, user) => usersRepo.update(userId, user);

const kick = (userId) => usersRepo.kick(userId);

module.exports = { getAll, getUserByID, create, update, kick };
