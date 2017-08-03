import {
  GraphQLBoolean
} from 'graphql';

import RoutineModel from '../../../models/routine';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return RoutineModel
      .remove({})
      .exec();
  }
};