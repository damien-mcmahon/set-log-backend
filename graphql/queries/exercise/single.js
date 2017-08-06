import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import ExerciseType from '../../types/exercise';
import ExerciseModel from '../../../models/exercise';

export default {
  type: ExerciseType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => ExerciseModel.findById(params._id).exec()
};