const router = require('express').Router();
const tasksService = require('./task.service');
const Task = require('./task.model.js');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).send(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getByID(req.params.id);
  if (task) {
    res.status(200).send(Task.toResponse(task));
  } else {
    res.status(404).send('task not found');
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(Task.fromRequest(req.body));
  res.status(201).send(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(
    req.params.id,
    Task.fromRequest(req.body)
  );
  res.status(200).send(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.kick(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
