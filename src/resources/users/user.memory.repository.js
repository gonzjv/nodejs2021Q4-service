const users = [
  { id: '1', name: 'Max', login: 'trshkv', password: '12345' },
  { id: '2', name: 'Sanya', login: 'agent007', password: '12345' },
  { id: '3', name: 'Maryan', login: 'soviet-citizen', password: '12345' },
  { id: '4', name: 'kate', login: 'soviet-citizen', password: '12345' },
];
const getAll = async () => users;

const getUserByID = async (userID) => users.find((user) => user.id === userID);

module.exports = { getAll, getUserByID };
