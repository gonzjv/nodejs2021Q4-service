import { Router } from 'express';
import Logger from '../../logger/logger';
import Board from './board.model';
import * as boardService from './board.service';

const router = Router();
const logger = new Logger();

router.route('/').get(async (req, res) => {
  logger.info(req, res);
  const boards = await boardService.getAll();
  res.status(200).send(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res, next) => {
  let board;
  try {
    board = await boardService.getByID(req.params.id);
  } catch (error) {
    next(error);
  }
  if (board) {
    logger.info(req, res);
    res.status(200).send(Board.toResponse(board));
  }
});

router.route('/').post(async (req, res) => {
  logger.info(req, res);
  const board = await boardService.create(
    Board.fromRequest(req.body)
  );
  res.status(201).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res, next) => {
  let board;
  try {
    board = await boardService.update(
      req.params.id,
      Board.fromRequest(req.body)
    );
  } catch (error) {
    next(error);
  }
  if (board) {
    logger.info(req, res);
    res.status(200).send(Board.toResponse(board));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  let boardToDelete;
  try {
    boardToDelete = await boardService.kick(req.params.id);
  } catch (error) {
    next(error);
  }
  if (boardToDelete) {
    logger.info(req, res);
    res.sendStatus(200);
  }
});

export { router as boardRouter };
