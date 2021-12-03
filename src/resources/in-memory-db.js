const USERS_INIT_ARR = [
  { id: '1', name: 'Max', login: 'trshkv', password: '12345' },
  { id: '2', name: 'Sanya', login: 'agent007', password: '12345' },
  { id: '3', name: 'Maryan', login: 'soviet-citizen', password: '12345' },
];
const BOARDS_INIT_ARR = [
  {
    id: '1',
    title: 'rs-school',
    columns: [{ id: '1', title: 'nodejs', order: 3 }],
  },
];

const users = USERS_INIT_ARR;

const boards = BOARDS_INIT_ARR;

module.exports = { users, boards };
