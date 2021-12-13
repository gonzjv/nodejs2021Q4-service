import { IBoard } from '../../interfaces/board.interface';

const { v4: uuidv4 } = require('uuid');

class Board {
  id: string;

  title: string;

  columns: { id: string; title: string; order: number }[];

  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [{ id: '1', title: 'nodejs', order: 3 }],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body: IBoard) {
    return new Board(body);
  }

  static toPut(id: string, board: IBoard) {
    const { title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
