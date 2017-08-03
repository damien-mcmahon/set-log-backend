import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import getProjection from '../../get-projection';
import ExerciseInputType from '../../types/exercise-input';
import ExerciseModel from '../../../models/exercise';

export default {
  type: ExerciseInputType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedExercises = await ExerciseModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedExercises) {
      throw new Error('Error removing Exercise');
    } else {
      return removedExercises;
    }
  }
}