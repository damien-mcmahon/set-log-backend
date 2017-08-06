import '../helpers/setup';
import { queryBuilder, mutationBuilder } from '../helpers/graphql-query-builder';
import { 
  exerciseFactory,
  exerciseIdFactory
} from '../factories/queries/exercise';
import chai, { expect } from 'chai';
import chaiGraphQL from 'chai-graphql';
import { makeAPIRequest } from '../helpers/make-request';
import seedDB from '../helpers/seed';

chai.use(chaiGraphQL);

describe('API - Exercise', () => {
  beforeEach(() => {
    seedDB();
  });

  describe('Queries', () => {
    describe('exercises()', () => {
      it('retrieves a list of exercises', (done) => {
        // TODO - remove this terrible race condition hack!
        setTimeout(() => {
          makeAPIRequest(queryBuilder('exercises', ['name']))
            .then(res => {
              const { body } = res;
              const { data: { exercises }} = body;

              expect(exercises[0]).to.be.an('object');
              expect(exercises[0]).to.have.property('name');
              done();
            });
        }, 10);
      });
    });

    describe('exercise()', () => {
      let exerciseId;
      let retrievedExercise;

      beforeEach(async () => {
        const { body: { data } } = await makeAPIRequest(queryBuilder('exercises', ['_id', 'name', 'bodyAreaTargeted']));
        retrievedExercise = data.exercises[0];
        exerciseId = retrievedExercise._id;
      });

      it('retrieves the exercise from the given id', async () => {
        const { body } = await makeAPIRequest(queryBuilder('exercise', ['_id', 'name', 'bodyAreaTargeted'], [
          exerciseIdFactory(exerciseId)
        ]));
        expect(body).to.be.graphQL({
          "exercise": retrievedExercise
        });
      })
    });
  });

  describe('Mutations', () => {
    describe('addExercise()', () => {
      it('adds an exercise', async () => {
        const { body } = await makeAPIRequest(mutationBuilder('addExercise', null, [
          exerciseFactory('Pull Ups', 'Arms, Shoulders, Back')
        ]))

        expect(body).to.be.graphQL({ addExercise: true})
      });

      it('wont add exercises with the same name', async () => {
        const res = await makeAPIRequest(mutationBuilder('addExercise', null, [
          exerciseFactory('Push ups', 'Chest')
        ]));

        expect(res.body).to.be.graphQLError();
      });
    });

    describe('remove()', () => {
      let exerciseId;
      let retrievedExercise;

      beforeEach(async () => {
        const { body: { data } } = await makeAPIRequest(queryBuilder('exercises', ['_id', 'name', 'bodyAreaTargeted']));
        retrievedExercise = data.exercises[0];
        exerciseId = retrievedExercise._id;
      });

      it('removes an exercise from the database', async () => {
        const { body } = await makeAPIRequest(mutationBuilder('removeExercise', ['_id','name','bodyAreaTargeted'], [
          exerciseIdFactory(exerciseId)
        ]));
        expect(body).to.be.graphQL({
          "removeExercise": retrievedExercise
        })
      });
    });
  });
});