import {
  GraphQLBoolean
} from 'graphql';

import RoutineModel from '../../../models/routine';

export default {
  type: GraphQLBoolean,
  resolve: () => RoutineModel.remove({}).exec()
};