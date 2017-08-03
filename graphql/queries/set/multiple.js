import {
  GraphQLList
} from 'graphql';

import SetType from '../../types/set';
import SetModel from '../../../models/set';

export default {
  type: new GraphQLList(SetType),
  args: {},
  resolve: () => SetModel.find().exec()
};