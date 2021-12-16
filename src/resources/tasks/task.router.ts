import { Router } from 'express';
import Task from './task.model';
import * as taskService from './task.service';

const router = Router();

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
    Task.fromRequest(req.params.boardId, req.body)
  );
  res.status(201).send(Task.toResponse(task));
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await taskService.update(
    req.params.taskId,
    req.params.boardId,
    Task.fromRequest(req.params.boardId, req.body)
  );
  if (task) {
    res.status(200).send(Task.toResponse(task));
  }
});

// router.route('/:id').delete(async (req, res) => {
//   await tasksService.kick(req.params.id);
//   res.sendStatus(200);
// });

export { router as taskRouter };
