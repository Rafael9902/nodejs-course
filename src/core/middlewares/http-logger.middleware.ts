import { NextFunction, Request, Response } from 'express';

export const httpLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time, 'style: green');
  next();
};
