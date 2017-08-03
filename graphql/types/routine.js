import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import SetType from './set';

export default new GraphQLObjectType({
  name: 'Routine',
  fields: {
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    sets: {
      type: GraphQLList(SetType)
    },
    intervalBetweenSets: {
      type: GraphQLInt
    },
    setCount: {
      type: GraphQLInt
    }
  }
})