import {
  GraphQLBoolean
} from 'graphql';

import WorkoutModel from '../../../models/workout';

export default {
  type: GraphQLBoolean,
  resolve: () => WorkoutModel.remove({}).exec()
};