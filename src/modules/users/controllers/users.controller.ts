import { Router } from 'express';
import { getUsers } from '../services/users.service.ts';

export const users = Router();
users.use('/users', users);

users.get('/', getUsers);
