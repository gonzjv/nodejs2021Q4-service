const { users } = require('../in-memory-db.js');
const User = require('./user.model.js');

const getAll = async () => users;

const getUserByID = async (userID) => users.find((user) => user.id === userID);

const create = async (user) => {
  console.log('user for create:', user);
  users.push(user);
  console.log('users after push:', users);
};

const update = async (oldId, user) => {
  const oldUser = await getUserByID(oldId);
  if (oldUser) {
    users[users.indexOf(oldUser)] = User.toPut(oldId, user);
  }

  return getUserByID(oldId);
};

module.exports = { getAll, getUserByID, create, update };
