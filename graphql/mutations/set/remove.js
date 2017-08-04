import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import SetType from '../../types/set';
import SetModel from '../../../models/set';

export default {
  type: SetType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params) {
    const removedSet = await SetModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removedSet) {
      throw new Error('Error removing Set');
    } else {
      return removedSet;
    }
  }
}