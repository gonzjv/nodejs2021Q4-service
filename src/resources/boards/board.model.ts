import { v4 as uuidv4 } from 'uuid';
import { IBoard } from '../../interfaces/board.interface';

class Board implements IBoard {
  id: string;

  title: string;

  columns: { id: string; title: string; order: number }[];

  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [{ id: uuidv4(), title: 'nodejs', order: 3 }],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body: Required<IBoard>) {
    return new Board(body);
  }

  static toPut(id: string, board: IBoard) {
    const { title, columns } = board;
    return { id, title, columns };
  }

  static toCreate(board: IBoard) {
    const { id, title } = board;
    return { id, title };
  }

  static columnsToCreate(board: IBoard) {
    const columns = board.columns.map((col) => ({
      ...col,
      boardId: board.id,
    }));
    console.log('columns: ', columns);
    return columns;
  }
}

export default Board;
