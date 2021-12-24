import { Router } from 'express';
import Logger from '../../logger/logger';
import Task from './task.model';
import * as taskService from './task.service';

const router = Router();
const logger = new Logger();

router.route('/:boardId/tasks').get(async (req, res) => {
  logger.info(req, res);
  const tasks = await taskService.getAll(req.params.boardId);
  res.status(200).send(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  logger.info(req, res);
  const task = await taskService.getByID(
    req.params.boardId,
    req.params.taskId
  );
  if (task) {
    res.status(200).send(Task.toResponse(task));
  } else {
    res.status(404).send('task not found');
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  logger.info(req, res);
  const task = await taskService.create(
    Task.fromRequest(req.params.boardId, req.body)
  );
  res.status(201).send(Task.toResponse(task));
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  logger.info(req, res);
  const task = await taskService.update(
    req.params.taskId,
    req.params.boardId,
    Task.fromRequest(req.params.boardId, req.body)
  );
  if (task) {
    res.status(200).send(Task.toResponse(task));
  }
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  logger.info(req, res);
  await taskService.kick(req.params.taskId, req.params.boardId);
  res.sendStatus(200);
});

export { router as taskRouter };
