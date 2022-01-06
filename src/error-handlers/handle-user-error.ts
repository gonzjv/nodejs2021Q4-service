import * as express from 'express';
import IError from '../interfaces/error.interface';
import Logger from '../logger/logger';
import UserError from './user-error';

const logger = new Logger();

const handleUserError = (
  err: IError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err instanceof UserError) {
    res.status(404).send(err.message);
    logger.error(req, res);
    next();
  } else {
    next(err);
  }
};

export default handleUserError;
