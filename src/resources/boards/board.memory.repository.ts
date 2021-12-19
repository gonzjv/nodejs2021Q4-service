import { IBoard } from '../../interfaces/board.interface';
import { boards, tasks } from '../in-memory-db';
import Board from './board.model';
import * as taskService from '../tasks/task.service';

/**
 * Returns all boards from database
 *
 * @returns all boards from DB
 */
const getAll = async () => boards;

/**
 * Returns board from database by ID
 *
 * @param id - ID of board
 * @returns object with board data
 */
const getByID = async (id: string) => boards.find((elem) => elem.id === id);

/**
 * Add new board to database
 * @param board - object with board data
 */
const create = async (board: Required<IBoard>) => {
  boards.push(board);
};

/**
 * Update board in database
 *
 * @param oldId - ID of board to update
 * @param board - object with updated board data
 * @returns updated board object
 */
const update = async (oldId: string, board: IBoard) => {
  const oldBoard = await getByID(oldId);
  if (oldBoard) {
    boards[boards.indexOf(oldBoard)] = Board.toPut(oldId, board);
  }

  return getByID(oldId);
};

/**
 * Delete board and board tasks from database
 *
 * @param id - ID of board to delete
 */
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
  }
};

export { getAll, getByID, create, update, kick };
