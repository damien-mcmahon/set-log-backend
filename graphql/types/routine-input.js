import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import SetInput from './set-input';

export default new GraphQLInputObjectType({
  name: 'RoutineInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    sets: {
      type: GraphQLList(SetInput)
    },
    intervalBetweenSets: {
      type: GraphQLInt
    },
    setCount: {
      type: GraphQLInt
    }
  }
});