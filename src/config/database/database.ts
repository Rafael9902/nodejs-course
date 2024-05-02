import mongoose from 'mongoose';
import { environment } from '../environment/environment.ts';
import { databaseOptions } from './database-options.ts';

export const databaseConnection = mongoose.createConnection(
  environment.DATABASE_URL!,
  databaseOptions
);

databaseConnection.on('open', () => {
  console.log('Mongodb connected');
});

databaseConnection.on('error', (error) =>
  console.log(`Mongodb connection error: ${error}`)
);
