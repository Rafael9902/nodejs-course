import { NextFunction, Request, Response } from 'express';

export const checkTourId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  if (id == '0') {
    res.status(400).json({
      error: 'id not valid'
    });
  }

  console.log(req.params.id, 'middleware');
  next();
};
