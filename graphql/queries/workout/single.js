import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import WorkoutType from '../../types/workout';
import WorkoutModel from '../../../models/workout';

export default {
  type: WorkoutType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => WorkoutModel.findById(params.id).exec()
};