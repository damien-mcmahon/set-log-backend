import {
  GraphQLBoolean
} from 'graphql';

import WorkoutModel from '../../../models/workout';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return WorkoutModel
      .remove({})
      .exec();
  }
};