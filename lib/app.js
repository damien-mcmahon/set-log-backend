import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import { getConnectionString } from './db';
import schema from '../graphql';

const app = express();

const SECRET = 'thisWillBeChangedAndTheChangeNotCommitted';

app.use('/graphql', graphqlHTTP(req => ({
  schema, 
  pretty: true,
  graphiql: true,
  formatError: error => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  }),
  context: {
    SECRET
  }
})));

mongoose.connect(getConnectionString(), {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

export default function(port = 8080) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
};