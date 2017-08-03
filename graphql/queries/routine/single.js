import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import RoutineType from '../../types/routine';
import RoutineModel from '../../../models/routine';

export default {
  type: RoutineType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => RoutineModel.findById(params.id).exec()
};