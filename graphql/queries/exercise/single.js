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
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => ExerciseModel.findById(params.id).exec()
};