import {
  GraphQLList
} from 'graphql';

import WorkoutType from '../../types/workout';
import getProjection from '../../get-projection';
import WorkoutModel from '../../../models/workout';

export default {
  type: new GraphQLList(WorkoutType),
  args: {},
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return WorkoutModel
      .find()
      .select(projection)
      .exec();
  }
};