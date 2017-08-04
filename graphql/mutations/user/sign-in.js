import jwt from 'jsonwebtoken';
import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import _ from 'lodash';

import UserType from '../../types/user';
import SignInType from '../../types/user-signin';
import UserModel from '../../../models/user';

export default {
  type: SignInType,
  args: {
    email: {
      name: 'email',
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      name: 'password',
      type: new GraphQLNonNull(GraphQLString)
    }
  },

  async resolve(root, params, { SECRET }) {
    //find the user by email address
    const userModel = await UserModel
      .findOne({email: params.email})
      .exec(); 

    if (!userModel) {
      throw new Error("Unable to find a user");
    }

    if (await userModel.checkPassword(params.password)) {
      return {
        token: jwt.sign({ user: userModel}, SECRET, { expiresIn: '1y'})
      };
    }
  }
}