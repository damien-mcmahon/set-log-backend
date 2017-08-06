import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import ExerciseInputType from '../../types/exercise-input';
import ExerciseModel from '../../../models/exercise';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ExerciseInputType)
    }
  },
  async resolve (root, params) {
    const matchingNames = await ExerciseModel.count({name: params.data.name})

    if (matchingNames !== 0) {
      throw new Error('Duplicate exercise added');
    }

    const exerciseModel = new ExerciseModel(params.data);
    const newExercise = await exerciseModel.save();

    if (!newExercise) {
      throw new Error('Error adding new Exercise');
    } else {
      return true;
    }
  }
}