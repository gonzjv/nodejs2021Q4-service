import { Router } from 'express';
import Logger from '../../logger/logger';
import User from './user.model';
import * as userService from './user.service';

const router = Router();
const logger = new Logger();

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  logger.info(req, res);
  res.status(200).send(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res, next) => {
  let user;
  try {
    user = await userService.getUserByID(req.params.userId);
    next();
  } catch (error: unknown) {
    next(error);
  }
  if (user) {
    logger.info(req, res);
    res.status(200).send(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = await userService.create(User.fromRequest(req.body));
  logger.info(req, res);
  res.status(201).send(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const user = await userService.update(
    req.params.userId,
    User.fromRequest(req.body)
  );
  logger.info(req, res);
  res.status(200).send(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  await userService.kick(req.params.userId);
  logger.info(req, res);
  res.sendStatus(200);
});

export { router as usersRouter };
