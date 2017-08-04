import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import ExerciseType from '../../types/exercise';
import ExerciseModel from '../../../models/exercise';

export default {
  type: ExerciseType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params) {
    const removedExercises = await ExerciseModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removedExercises) {
      throw new Error('Error removing Exercise');
    } else {
      return removedExercises;
    }
  }
}