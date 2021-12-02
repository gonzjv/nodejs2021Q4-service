const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).send(users.map(User.toResponse));
});

router.route('/:user_id').get(async (req, res) => {
  const user = await usersService.getUserByID(req.params.user_id);
  res.status(200).send(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(User.fromRequest(req.body));
  res.status(201).send(User.toResponse(user));
});

module.exports = router;
