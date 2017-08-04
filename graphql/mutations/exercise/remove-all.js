import {
  GraphQLBoolean
} from 'graphql';

import ExerciseModel from '../../../models/exercise';

export default {
  type: GraphQLBoolean,
  resolve: () => ExerciseModel.remove({}).exec()
};