import { Router } from 'express';
import User from './user.model';
import * as userService from './user.service';

// const router = require('express').Router();
// const User = require('./user.model');
// const usersService = require('./user.service');
const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await userService.getAll();
  res.status(200).send(users.map(User.toResponse));
});

// router.route('/:userId').get(async (req, res) => {
//   const user = await usersService.getUserByID(req.params.userId);
//   res.status(200).send(User.toResponse(user));
// });

// router.route('/').post(async (req, res) => {
//   const user = await usersService.create(User.fromRequest(req.body));
//   res.status(201).send(User.toResponse(user));
// });

// router.route('/:userId').put(async (req, res) => {
//   const user = await usersService.update(
//     req.params.userId,
//     User.fromRequest(req.body)
//   );
//   res.status(200).send(User.toResponse(user));
// });

// router.route('/:userId').delete(async (req, res) => {
//   await usersService.kick(req.params.userId);
//   res.sendStatus(200);
// });

// module.exports = router;
export { router as usersRouter };
