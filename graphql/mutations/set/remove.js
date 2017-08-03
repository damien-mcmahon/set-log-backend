import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import SetType from '../../types/set';
import SetModel from '../../../models/set';
import getProjection from '../../get-projection';

export default {
  type: SetType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedSet = await SetModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedSet) {
      throw new Error('Error removing Set');
    } else {
      return removedSet;
    }
  }
}