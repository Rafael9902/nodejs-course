import { Router } from 'express';
import {
  createTour,
  getTour,
  getTours
} from '../controllers/tours.controller.ts';
import { checkTourId } from '../middlewares/check-tour-id.middleware.ts';

export const tours = Router();
tours.use('/tours', tours);

tours.param('id', checkTourId);

tours.get('/', getTours);
tours.get('/:id', getTour);

tours.post('/', createTour);

// routes(endpoints) -> controller(req, res) -> service(business logic)
