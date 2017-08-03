import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import SetType from './set';

export default new GraphQLObjectType({
  name: 'Routine',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    sets: {
      type: new GraphQLList(SetType)
    },
    intervalBetweenSets: {
      type: GraphQLInt
    },
    setCount: {
      type: GraphQLInt
    }
  }
})