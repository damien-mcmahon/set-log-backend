import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import WorkoutInputType from '../../types/workout-input';
import WorkoutModel from '../../../models/workout';
import getProjection from '../../get-projection';

export default {
  type: WorkoutInputType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedWorkout = await WorkoutModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedWorkout) {
      throw new Error('Error removing Workout');
    } else {
      return removedWorkout;
    }
  }
}