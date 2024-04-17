import express, { Express } from 'express';
import { environment } from './environment/environment.ts';
import { tours } from './modules/tours/controllers/tours.controller.ts';
import { httpLogger } from './core/middlewares/http-logger.middleware.ts';
import { users } from './modules/users/controllers/users.controller.ts';

const app: Express = express();

app.use(express.json());
app.use(httpLogger);

app.use('/api/v1', tours);
app.use('/api/v1', users);

app.listen(environment.PORT, () => console.log('Server listening'));
