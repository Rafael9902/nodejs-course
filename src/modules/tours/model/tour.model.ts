import { Schema, model } from 'mongoose';

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A tour musth have a name'],
    unique: true
  },
  title: String,
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});

export const tourEntity = model('Tour', tourSchema);
