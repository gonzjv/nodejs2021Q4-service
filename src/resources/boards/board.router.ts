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

router.route('/:id').get(async (req, res) => {
  logger.info(req, res);
  const board = await boardService.getByID(req.params.id);
  if (board) {
    res.status(200).send(Board.toResponse(board));
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/').post(async (req, res) => {
  logger.info(req, res);
  const board = await boardService.create(
    Board.fromRequest(req.body)
  );
  res.status(201).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  logger.info(req, res);
  const board = await boardService.update(
    req.params.id,
    Board.fromRequest(req.body)
  );
  if (board) {
    res.status(200).send(Board.toResponse(board));
  }
});

router.route('/:id').delete(async (req, res) => {
  logger.info(req, res);
  await boardService.kick(req.params.id);
  res.sendStatus(200);
});

export { router as boardRouter };
