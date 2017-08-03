import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import SetType from '../../types/set';
import getProjection from '../../get-projection';
import SetModel from '../../../models/set';

export default {
  type: SetType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    return SetModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};