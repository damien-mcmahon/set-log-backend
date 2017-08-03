import {
  GraphQLList
} from 'graphql';

import ExerciseType from '../../types/exercise';
import ExerciseModel from '../../../models/exercise';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: () => ExerciseModel.find().exec()
};