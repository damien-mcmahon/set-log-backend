import exercise from './exercise';
import completedSet from './completed-set';
import routine from './routine';
import set from './set';
import workout from './workout';

export default {
  ...completedSet,
  ...exercise,
  ...routine,
  ...set,
  ...workout
};