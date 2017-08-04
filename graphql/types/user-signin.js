import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import UserType from './user';

export default new GraphQLObjectType({
  name: 'UserSignIn',
  fields: {
    token: {
      type: GraphQLString
    }
  }
})