import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import _ from 'lodash';
const SALT_ROUNDS = 12;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

UserSchema.method('checkPassword', async function checkPassword(password) {
  return await bcrypt.compare(password, this.password);
});

UserSchema.pre('save', async function(next){
  //hash the password
  if (this.password) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  }

  if (_.isUndefined(this.createdAt)) {
    //set the timestamp
    this.createdAt = new Date();
  }

  next()
});

export default mongoose.model('User', UserSchema);