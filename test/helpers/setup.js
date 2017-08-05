process.env.NODE_ENV = 'TEST';

import mongoose from 'mongoose';
import { getConnectionString } from '../../lib/db';
import app from '../../lib/app';
import CONFIG from './config';

//clear the test db
mongoose.Promise = global.Promise;
const connection = mongoose.connect(getConnectionString(), {
  useMongoClient: true
});

connection.then(() => {
  mongoose.connection.db.dropDatabase();
})

//set the env variables
app(CONFIG.TEST_PORT);