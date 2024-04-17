import { Router } from 'express';
import { getTours } from '../services/tours.service.ts';

export const tours = Router();
tours.use('/tours', tours);

tours.get('/', getTours);
