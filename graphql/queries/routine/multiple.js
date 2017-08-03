import {
  GraphQLList
} from 'graphql';

import RoutineType from '../../types/routine';
import getProjection from '../../get-projection';
import RoutineModel from '../../../models/routine';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return RoutineModel
      .find()
      .select(projection)
      .exec();
  }
};