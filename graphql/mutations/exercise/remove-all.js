import {
  GraphQLBoolean
} from 'graphql';

import ExerciseModel from '../../../models/exercise';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return ExerciseModel
      .remove({})
      .exec();
  }
};