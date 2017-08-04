import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import WorkoutInputType from '../../types/workout-input';
import WorkoutModel from '../../../models/workout';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(WorkoutInputType)
    }
  },
  async resolve (root, params) {
    const workoutModel = new WorkoutModel(params.data);
    const newWorkout = await workoutModel.save();

    if (!newWorkout) {
      throw new Error('Error adding new Workout');
    } else {
      return true;
    }
  }
}