import mongoose from 'mongoose';

const CompletedSetSchema = new mongoose.Schema({
  exerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  expectedReps: {
    type: Number,
    required: true
  },
  completedReps: {
    type: Number,
    required: true
  }
});

export default mongoose.model('CompletedSet', CompletedSetSchema);