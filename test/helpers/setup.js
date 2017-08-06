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

connection.then( async () => {
  await mongoose.connection.db.dropDatabase();
});

app(CONFIG.TEST_PORT);