import {
  GraphQLList
} from 'graphql';

import WorkoutType from '../../types/workout';
import WorkoutModel from '../../../models/workout';

export default {
  type: new GraphQLList(WorkoutType),
  args: {},
  resolve: () => WorkoutModel.find().exec()
};