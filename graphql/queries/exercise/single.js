import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import ExerciseType from '../../types/exercise';
import getProjection from '../../get-projection';
import ExerciseModel from '../../../models/exercise';

export default {
  type: ExerciseType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return ExerciseModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};