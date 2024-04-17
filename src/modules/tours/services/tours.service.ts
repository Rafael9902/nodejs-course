import { Request, Response } from 'express';

export const getTours = (req: Request, res: Response) => {
  res.send('tours');
};
