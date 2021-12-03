const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = ['very-high-column', 'little-big-column'],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body) {
    return new Board(body);
  }

  static toPut(id, board) {
    const { title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
