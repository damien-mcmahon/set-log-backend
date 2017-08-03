import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import RoutineType from '../../types/routine';
import getProjection from '../../get-projection';
import RoutineModel from '../../../models/routine';

export default {
  type: RoutineType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return RoutineModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};