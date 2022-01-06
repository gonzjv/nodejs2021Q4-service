const { users } = require('../in-memory-db.js');
const User = require('./user.model.js');

const getAll = async () => users;

const getUserByID = async (userID) => users.find((user) => user.id === userID);

const create = async (user) => {
  users.push(user);
};

const update = async (oldId, user) => {
  const oldUser = await getUserByID(oldId);
  if (oldUser) {
    users[users.indexOf(oldUser)] = User.toPut(oldId, user);
  }

  return getUserByID(oldId);
};

const kick = async (userId) => {
  const userToDelete = await getUserByID(userId);
  if (userToDelete) {
    const index = users.indexOf(userToDelete);
    users.splice(index, 1);
  }
};

module.exports = { getAll, getUserByID, create, update, kick };
