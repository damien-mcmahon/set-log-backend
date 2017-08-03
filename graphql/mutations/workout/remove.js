import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import WorkoutType from '../../types/workout';
import WorkoutModel from '../../../models/workout';

export default {
  type: WorkoutType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params) {
    const removedWorkout = await WorkoutModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removedWorkout) {
      throw new Error('Error removing Workout');
    } else {
      return removedWorkout;
    }
  }
}