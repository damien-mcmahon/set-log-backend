import {
  GraphQLList
} from 'graphql';

import ExerciseType from '../../types/exercise';
import getProjection from '../../get-projection';
import ExerciseModel from '../../../models/exercise';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return ExerciseModel
      .find()
      .select(projection)
      .exec();
  }
};