import mongoose from 'mongoose';

const habitsSchema = new mongoose.Schema({
 
  description: {
    type: String,
    required: [true, 'write an habit'],

  },
  isNeutral: {
    type: Boolean,
    default: true,
  },
  isBad: {
    type: Boolean,
    default: false,
  },
  
  isFuture: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // propiedades para realizar soft-delete
  deletedAt: {
    type: Date,
    default: Date.now,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
  updatedAt: Date,
},
{ autoIndex: false });

const Habit = mongoose.model('Habit', habitsSchema);

export default Habit;
