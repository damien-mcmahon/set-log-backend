import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import CompletedSetType from '../../types/completed-set';
import getProjection from '../../get-projection';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: CompletedSetType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return CompletedSetModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};