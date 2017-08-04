import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
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
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});