import { v4 as uuidv4 } from 'uuid';
import ITask from '../../interfaces/task.interface';
// const { v4: uuidv4 } = require('uuid');

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

  columnId: string;

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
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Required<ITask>) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }

  static fromRequest(boardId: string, body: ITask) {
    const task = new Task(body);
    task.boardId = boardId;
    return task;
  }

  // static toPut(id, task) {
  //   const { title, order, description, userId, boardId, columnId } = task;
  //   return { id, title, order, description, userId, boardId, columnId };
  // }
}

// module.exports = Task;
export default Task;
