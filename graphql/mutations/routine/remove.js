import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import RoutineType from '../../types/routine';
import RoutineModel from '../../../models/routine';

export default {
  type: RoutineType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params) {
    const removeRoutine = await RoutineModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removeRoutine) {
      throw new Error('Error removing Routine');
    } else {
      return removeRoutine;
    }
  }
}