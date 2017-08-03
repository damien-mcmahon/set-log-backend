import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt
} from 'graphql';

import CompletedSet from './completed-set';

export default new GraphQLObjectType({
  name: 'Workout',
  fields: {
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    completedSets: {
      type: GraphQLList(CompletedSet)
    },
    completedOn: {
      type: GraphQLInt
    }
  }
});