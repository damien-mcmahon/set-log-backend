import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ExerciseInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    bodyAreaTargeted: {
      type: GraphQLString
    }
  }
});