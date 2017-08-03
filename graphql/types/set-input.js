import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'SetInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    exerciseId: {
      type: GraphQLID
    },
    repsCount: {
      type: GraphQLInt
    },
    repsInterval: {
      type: GraphQLInt
    }
  }
});