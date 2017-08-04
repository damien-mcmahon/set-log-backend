import mongoose from 'mongoose';

const RoutineSchema = new mongoose.Schema({
  sets: {
    type: Array,
    required: true
  },
  intervalBetweenSets: {
    type: Number,
    required: true
  },
  setCount: {
    type: Array,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model('Routine', RoutineSchema);