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
      type: new GraphQLNonNull(GraphQLID)
    },
    completedSets: {
      type: new GraphQLList(CompletedSet)
    },
    completedOn: {
      type: GraphQLInt
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});