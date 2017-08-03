import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import SetType from '../../types/set';
import SetModel from '../../../models/set';

export default {
  type: SetType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => SetModel.findById(params.id).exec()
};