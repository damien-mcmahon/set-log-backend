import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import WorkoutType from '../../types/workout';
import getProjection from '../../get-projection';
import WorkoutModel from '../../../models/workout';

export default {
  type: WorkoutType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return WorkoutModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};