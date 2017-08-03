import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {Types} from 'mongoose';

import CompletedSetType from '../../types/completed-set';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: CompletedSetType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params) => CompletedSetModel.findById(params.id).exec()
};