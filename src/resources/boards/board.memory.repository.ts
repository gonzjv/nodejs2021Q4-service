// // const { boards } = require('../in-memory-db.js');
// const Board = require('./board.model.js');

// const getAll = async () => boards;

// const getByID = async (id) => boards.find((board) => board.id === id);

// const create = async (board) => {
//   boards.push(board);
// };

// const update = async (oldId, board) => {
//   const oldBoard = await getByID(oldId);
//   if (oldBoard) {
//     boards[boards.indexOf(oldBoard)] = Board.toPut(oldId, board);
//   }

//   return getByID(oldId);
// };

// const kick = async (id) => {
//   const elemToDelete = await getByID(id);
//   if (elemToDelete) {
//     const index = boards.indexOf(elemToDelete);
//     boards.splice(index, 1);
//   }
// };

// module.exports = { getAll, getByID, create, update, kick };
