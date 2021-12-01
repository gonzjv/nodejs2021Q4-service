const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserByID = (userID) => usersRepo.getUserByID(userID);

module.exports = { getAll, getUserByID };
