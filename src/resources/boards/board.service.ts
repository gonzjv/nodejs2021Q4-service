import { IBoard } from '../../interfaces/board.interface';
import * as boardsRepo from './board.repository';

const getAll = () => boardsRepo.getAll();

const getByID = (id: string) => boardsRepo.getByID(id);

const create = (elem: Required<IBoard>) => {
  boardsRepo.create(elem);
  return elem;
};

const update = (id: string, elem: IBoard) =>
  boardsRepo.update(id, elem);

const kick = (id: string) => boardsRepo.kick(id);

export { getAll, getByID, create, update, kick };
