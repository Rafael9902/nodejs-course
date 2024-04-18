import { Request, Response } from 'express';

export const getTours = (req: Request, res: Response) => {
  res.send('tours');
};

export const getTour = (req: Request, res: Response) => {
  const id: string = req.params.id;

  console.log(id, 'hola');

  res.send(id);
};
