const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'TASK',
    order = 0,
    description = 'task description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columndId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.desription = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }

  static fromRequest(body, boardId) {
    const task = new Task(body);
    task.boardId = boardId;
    return task;
  }

  static toPut(id, task) {
    const { title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
