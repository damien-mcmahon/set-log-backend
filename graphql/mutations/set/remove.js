import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import SetInputType from '../../types/set-input';
import SetModel from '../../../models/set';
import getProjection from '../../get-projection';

export default {
  type: SetInputType,
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