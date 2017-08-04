import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import UserInputType from '../../types/user-input';
import UserModel from '../../../models/user';

export default {
  type: GraphQLBoolean,
  args: {
    user: {
      name: 'user',
      type: new GraphQLNonNull(UserInputType)
    }
  },
  async resolve(root, params) {
    const userModel = new UserModel(params.user);
    userModel.createdAt = new Date();
    const newUser = await userModel.save();

    if (!newUser) {
      throw new Error('Error adding a new User');
    } else {
      return true;
    }
  }
}