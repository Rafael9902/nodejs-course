import { Request, Response } from 'express';
import { tourEntity } from '../model/tour.model.ts';

export const getTours = (req: Request, res: Response) => {
  res.send('tours');
};

export const getTour = (req: Request, res: Response) => {
  const id: string = req.params.id;

  console.log(id, 'hola');

  res.send(id);
};

export const createTour = (req: Request, res: Response) => {
  try {
    const newTour = tourEntity.create({
      name: 'test',
      price: 500
    });

    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: 'err'
    });
    console.error(err);
  }
};
