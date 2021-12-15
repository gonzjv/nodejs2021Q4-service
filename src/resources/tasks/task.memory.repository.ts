import ITask from '../../interfaces/task.interface';
import { tasks } from '../in-memory-db';

const getAll = async (boardId: string) =>
  tasks.filter((task) => task.boardId === boardId);

const getByID = async (boardId: string, id: string) =>
  tasks.find((task) => task.boardId === boardId && task.id === id);

const create = async (task: Required<ITask>) => {
  tasks.push(task);
};

// const update = async (oldId, task) => {
//   const oldTask = await getByID(oldId);
//   if (oldTask) {
//     tasks[tasks.indexOf(oldTask)] = Task.toPut(oldId, task);
//   }

//   return getByID(oldId);
// };

// const kick = async (id) => {
//   const elemToDelete = await getByID(id);
//   if (elemToDelete) {
//     const index = tasks.indexOf(elemToDelete);
//     tasks.splice(index, 1);
//   }
// };

export { getAll, create, getByID };
