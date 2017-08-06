import { exerciseModelFactory } from '../factories/models/exercise';
import Exercise from '../../models/exercise';

function createUsers() {
  Exercise.create(
    exerciseModelFactory('Push ups', 'Chest, Arms, Shoulders'),
    exerciseModelFactory('Chin ups', 'Arms, Shoulders, Back'),
    exerciseModelFactory('Squats', 'Legs, Core, Back')
  );
}
export default async function seedDB() {
  await createUsers();
}