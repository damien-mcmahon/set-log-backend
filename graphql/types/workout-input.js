import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import CompletedSetInput from './completed-set-input';
import SetInput from './set-input';

export default new GraphQLInputObjectType({
  name: 'WorkoutInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    completedSets: {
      type: new GraphQLList(SetInput)
    },
    completedOn: {
      type: GraphQLInt
    }
  }
});