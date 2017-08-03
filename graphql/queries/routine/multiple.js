import {
  GraphQLList
} from 'graphql';

import RoutineType from '../../types/routine';
import ExerciseType from '../../types/exercise';
import RoutineModel from '../../../models/routine';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: () => RoutineModel.find().exec()
};