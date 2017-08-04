import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import RoutineInputType from '../../types/routine-input';
import RoutineModel from '../../../models/routine';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RoutineInputType)
    }
  },
  async resolve (root, params) {
    const routineModel = new RoutineModel(params.data);
    const newRoutine = await routineModel.save();

    if (!newRoutine) {
      throw new Error('Error adding new Routine');
    } else {
      return true;
    }
  }
}