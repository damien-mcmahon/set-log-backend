import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import CompletedSetType from '../../types/completed-set';
import getProjection from '../../get-projection';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: CompletedSetType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedCompletedSet = await CompletedSetModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedCompletedSet) {
      throw new Error('Error removing Completed Set');
    } else {
      return removedCompletedSet;
    }
  }
}