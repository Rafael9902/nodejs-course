import express, { Express } from 'express';
import { environment } from './environment/environment.ts';
import { httpLogger } from './core/middlewares/http-logger.middleware.ts';
import { tours } from './modules/tours/routes/tours.routes.ts';
import { users } from './modules/users/routes/users.routes.ts';

const app: Express = express();

app.use(express.json());
app.use(httpLogger);

app.use('/api/v1', tours);
app.use('/api/v1', users);

app.listen(environment.PORT, () => console.log('Server listening'));
