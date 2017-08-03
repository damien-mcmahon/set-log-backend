import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP(req => ({
  schema, 
  pretty: true
})));

mongoose.connect('mongodb://localhost/graphql');

const server = app.listen(8080, () => {
  console.log("Listening on port 8080");
})