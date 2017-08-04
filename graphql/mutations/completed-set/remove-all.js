import {
  GraphQLBoolean
} from 'graphql';

import CompletedSetModel from '../../../models/completed-set';

export default {
  type: GraphQLBoolean,
  resolve: () => CompletedSetModel.remove({}).exec()
};