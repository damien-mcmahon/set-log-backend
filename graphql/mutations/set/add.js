import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import SetInputType from '../../types/set-input';
import SetModel from '../../../models/set';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(SetInputType)
    }
  },
  async resolve (root, params) {
    const setModel = new SetModel(params.data);
    const newSet = await setModel.save();

    if (!newSet) {
      throw new Error('Error adding new Set');
    } else {
      return true;
    }
  }
}