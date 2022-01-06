import { Request, Response, NextFunction } from 'express';

interface IApp {
  req: Request;
  res: Response;
  next: NextFunction;
}

export { IApp };
