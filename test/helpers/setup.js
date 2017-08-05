import mongoose from 'mongoose';
import { getConnectionString } from '../../lib/db';
import app from '../../lib/app';

//clear the test db
mongoose.connect(getConnectionString(), () => {
  mongoose.connection.db.dropDatabase();
});

//set the env variables
process.env.NODE_ENV = 'TEST';
process.env.PORT = 8081;

// import the app
require('../../lib/app');