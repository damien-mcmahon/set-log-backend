import {
  GraphQLList
} from 'graphql';

import SetType from '../../types/set';
import getProjection from '../../get-projection';
import SetModel from '../../../models/set';

export default {
  type: new GraphQLList(SetType),
  args: {},
  resolve: (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return SetModel
      .find()
      .select(projection)
      .exec();
  }
};