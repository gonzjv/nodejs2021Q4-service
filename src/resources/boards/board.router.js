const router = require('express').Router();
const boardService = require('./board.service');
const taskService = require('../tasks/task.service');
const Board = require('./board.model.js');
const Task = require('../tasks/task.model.js');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).send(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getByID(req.params.id);
  if (board) {
    res.status(200).send(Board.toResponse(board));
  } else {
    res.status(404).send('board not found');
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(Board.fromRequest(req.body));
  res.status(201).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.update(
    req.params.id,
    Board.fromRequest(req.body)
  );
  res.status(200).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  await boardService.kick(req.params.id);
  res.sendStatus(200);
});

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);
  res.status(200).send(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await taskService.getByID(req.params.boardId, req.params.taskId);
  if (task) {
    res.status(200).send(Task.toResponse(task));
  } else {
    res.status(404).send('task not found');
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = await taskService.create(
    Task.fromRequest(req.body, req.params.boardId)
  );
  res.status(201).send(Task.toResponse(task));
});

module.exports = router;
