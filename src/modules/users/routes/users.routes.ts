import { Router } from 'express';
import { getUsers } from '../controllers/users.controller.ts';

export const users = Router();
users.use('/users', users);

users.get('/', getUsers);
