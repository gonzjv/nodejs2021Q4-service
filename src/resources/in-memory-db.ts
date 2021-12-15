import { IBoard } from '../interfaces/board.interface';
import ITask from '../interfaces/task.interface';

const USERS_INIT_ARR = [
  { id: '1', name: 'Max', login: 'trshkv', password: '12345' },
  { id: '2', name: 'Sanya', login: 'agent007', password: '12345' },
  { id: '3', name: 'Maryan', login: 'soviet-citizen', password: '12345' },
];

const BOARDS_INIT_ARR: Required<IBoard>[] = [];

// const BOARDS_INIT_ARR = [
//   {
//     id: '1',
//     title: 'rs-school',
//     columns: [{ id: '1', title: 'nodejs', order: 3 }],
//   },
// ];

const TASKS_INIT_ARR: Required<ITask>[] = [];

// const TASKS_INIT_ARR = [
//   // {
//   //   id: '1',
//   //   title: 'rest-service',
//   //   order: 1,
//   //   description: 'Create a competitor for Trello!',
//   //   userId: '1',
//   //   boardId: '1',
//   //   columnId: '1',
//   // },
//   // {
//   //   id: '2',
//   //   title: 'CRUD-API',
//   //   order: 1,
//   //   description: 'Simple',
//   //   userId: '1',
//   //   boardId: '2',
//   //   columnId: '1',
//   // },
// ];

const users = USERS_INIT_ARR;

const boards = BOARDS_INIT_ARR;

const tasks = TASKS_INIT_ARR;

export { users, boards, tasks };
