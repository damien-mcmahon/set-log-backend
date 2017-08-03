import mongoose from 'mongoose';

const SetSchema = new mongoose.Schema({
  exerciseId: {
    type: mongoose.Schema.Types.ObectId,
    required: true
  },
  repsCount: {
    type: Number,
    required: true
  },
  repsInterval: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Set', SetSchema);