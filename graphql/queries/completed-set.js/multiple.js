import {
  GraphQLList
} from 'graphql';

import CompletedSetType from '../../types/completed-set';
import getProjection from '../../get-projection';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return CompletedSetModel
      .find()
      .select(projection)
      .exec();
  }
};