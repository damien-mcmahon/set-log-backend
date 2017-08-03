import {
  GraphQLBoolean
} from 'graphql';

import SetModel from '../../../models/set';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return SetModel
      .remove({})
      .exec();
  }
};