import UserError from '../../error-handlers/user-error';
import { IBoard } from '../../interfaces/board.interface';
import { boards } from '../in-memory-db';
import Board from './board.model';

const getAll = async () => boards;

const getByID = async (id: string) => {
  const board = boards.find((elem) => elem.id === id);
  if (!board) {
    throw new UserError('Board does not exist');
  } else {
    return board;
  }
};

const create = async (board: Required<IBoard>) => {
  boards.push(board);
};

const update = async (oldId: string, board: IBoard) => {
  const oldBoard = await getByID(oldId);
  if (oldBoard) {
    boards[boards.indexOf(oldBoard)] = Board.toPut(oldId, board);
  }

  return getByID(oldId);
};

const kick = async (id: string) => {
  const elemToDelete = await getByID(id);
  if (elemToDelete) {
    const index = boards.indexOf(elemToDelete);
    boards.splice(index, 1);
  }
};

export { getAll, getByID, create, update, kick };
