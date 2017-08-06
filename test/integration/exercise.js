import '../helpers/setup';
import { queryBuilder, mutationBuilder } from '../helpers/graphql-query-builder';
import { exerciseFactory } from '../factories/queries/exercise';
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
              expect(exercises[0]).to.have.property('bodyAreaTargeted');
              done();
            });
        }, 50);
      });
    });

    describe('exercise()', () => {
    });
  });

  describe('Mutations', () => {
    describe('addExercise()', () => {
      it('adds an exercise', (done) => {
        makeAPIRequest(mutationBuilder('addExercise', null, [
          exerciseFactory('Chin ups', 'Chest')
        ]))
        .then((res) => {
          const { body } = res;
          expect(body).to.be.graphQL({ addExercise: true})
          done();
        })
      });
    });
  });
});