import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import CompletedSetType from '../../types/completed-set';
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
    const removedCompletedSet = await CompletedSetModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removedCompletedSet) {
      throw new Error('Error removing Completed Set');
    } else {
      return removedCompletedSet;
    }
  }
}