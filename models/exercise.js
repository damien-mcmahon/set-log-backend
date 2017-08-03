import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bodyAreaTargeted: {
    type: String,
    required: true
  }
});

export default mongoose.model('Exercise', ExerciseSchema);