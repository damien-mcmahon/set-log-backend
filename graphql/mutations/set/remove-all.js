import {
  GraphQLBoolean
} from 'graphql';

import SetModel from '../../../models/set';

export default {
  type: GraphQLBoolean,
  resolve: () => SetModel.remove({}).exec()
};