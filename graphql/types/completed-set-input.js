import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CompletedSetInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    exerciseId: {
      type: GraphQLID
    },
    expectedReps: {
      type: GraphQLInt
    },
    completedReps: {
      type: GraphQLInt
    }
  }
});