import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
  completedSets: {
    type: Array,
    required: true
  },
  completedOn: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Workout', WorkoutSchema);