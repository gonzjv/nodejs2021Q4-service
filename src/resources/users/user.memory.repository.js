const { users } = require('../in-memory-db.js');

const getAll = async () => users;

const getUserByID = async (userID) => users.find((user) => user.id === userID);

const create = async (user) => {
  users.push(user);
};

module.exports = { getAll, getUserByID, create };
