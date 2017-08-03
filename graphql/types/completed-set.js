import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'CompletedSet',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    exerciseId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    expectedReps: {
      type: GraphQLInt
    },
    completedReps: {
      type: GraphQLInt
    }
  }
})