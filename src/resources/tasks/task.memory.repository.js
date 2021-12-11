// const { tasks } = require('../in-memory-db.js');
// const Task = require('./task.model.js');

// const getAll = async (boardId) =>
//   tasks.filter((task) => task.boardId === boardId);

// const getByID = async (boardId, id) =>
//   tasks.find((task) => task.boardId === boardId && task.id === id);

// const create = async (task) => {
//   tasks.push(task);
// };

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

// module.exports = { getAll, getByID, create, update, kick };
