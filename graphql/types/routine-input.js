import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import SetInput from './set-input';

export default new GraphQLInputObjectType({
  name: 'RoutineInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    sets: {
      type: new GraphQLList(SetInput)
    },
    intervalBetweenSets: {
      type: GraphQLInt
    },
    setCount: {
      type: GraphQLInt
    }
  }
});