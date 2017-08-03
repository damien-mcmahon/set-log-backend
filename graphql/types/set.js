import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Set',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    exerciseId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    repsCount: {
      type: GraphQLInt
    },
    repsInterval: {
      type: GraphQLInt
    }
  }
})