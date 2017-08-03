import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import RoutineInputType from '../../types/routine-input';
import RoutineModel from '../../../models/routine';
import getProjection from '../../get-projection';

export default {
  type: RoutineInputType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removeRoutine = await RoutineModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removeRoutine) {
      throw new Error('Error removing Routine');
    } else {
      return removeRoutine;
    }
  }
}