import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import CompletedSetInput from './completed-set-input';

export default new GraphQLInputObjectType({
  name: 'WorkoutInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    completedSets: {
      type: GraphQLList(SetInput)
    },
    completedOn: {
      type: GraphQLInt
    }
  }
});