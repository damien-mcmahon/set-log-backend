import {
  GraphQLList
} from 'graphql';

import CompletedSetType from '../../types/completed-set';
import ExerciseType from '../../types/exercise';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: new GraphQLList(ExerciseType),
  args: {},
  resolve: () => CompletedSetModel.find().exec()
};