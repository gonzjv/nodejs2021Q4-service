import { Router } from 'express';
import pino from 'pino';
import handleUserError from '../../error-handlers/handle-user-error';
import UserError from '../../error-handlers/user-error';
import User from './user.model';
import * as userService from './user.service';

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});
const router = Router();

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  // req.log.info(`url: ${req.url}`);
  logger.info(
    `Hi there!!! URL is: ${req.originalUrl};\n Query params is not present;\n Body: ${req.body}`
  );
  res.status(200).send(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  let user;
  try {
    user = await userService.getUserByID(req.params.userId);
  } catch (error: unknown) {
    if (error instanceof UserError) {
      handleUserError(error);
    } else {
      throw error;
    }
  }
  if (user) {
    res.status(200).send(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = await userService.create(User.fromRequest(req.body));
  res.status(201).send(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const user = await userService.update(
    req.params.userId,
    User.fromRequest(req.body)
  );
  res.status(200).send(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  await userService.kick(req.params.userId);
  res.sendStatus(200);
});

export { router as usersRouter };
