// import UserError from '../../error-handlers/user-error';
import { IBoard } from '../../interfaces/board.interface';
import { boards, tasks } from '../in-memory-db';
import Board from './board.model';
import * as taskService from '../tasks/task.service';

const getAll = async () => boards;

const getByID = async (id: string) => boards.find((elem) => elem.id === id);

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
    tasks.map(async (task) => {
      if (task.boardId === elemToDelete.id) {
        await taskService.kick(task.id, task.boardId);
      }
      return null;
    });
    console.log('tasks after:', tasks);
  }
};

export { getAll, getByID, create, update, kick };
