import {
  GraphQLBoolean
} from 'graphql';

import CompletedSetModel from '../../../models/completed-set';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return CompletedSetModel
      .remove({})
      .exec();
  }
};