import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import CompletedSetType from '../../types/completed-set-input';
import CompletedSetModel from '../../../models/completed-set';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(CompletedSetType)
    }
  },
  async resolve (root, params) {
    const completedSetModel = new CompletedSetModel(params.data);
    const newCompletedSet = await completedSetModel.save();

    if (!newCompletedSet) {
      throw new Error('Error adding new Completed Set');
    } else {
      return true;
    }
  }
}