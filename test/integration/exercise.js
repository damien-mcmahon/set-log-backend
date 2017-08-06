import '../helpers/setup';
import { queryBuilder, mutationBuilder } from '../helpers/graphql-query-builder';
import { exerciseFactory } from '../factories/exercise-query';
import chai, { expect } from 'chai';
import chaiGraphQL from 'chai-graphql';
import app from '../../lib/app';
import { makeAPIRequest } from '../helpers/make-request';

chai.use(chaiGraphQL);

describe('API - Exercise', () => {
  describe('Queries', () => {
    describe('exercises()', () => {
      it('retrieves an empty list of exercises', (done) => {
        makeAPIRequest(queryBuilder('exercises', ['name', 'bodyAreaTargeted']))
          .then(res => {
            const { body } = res;
            expect(body).to.be.graphQL({exercises: []});
            done();
          });
      });

      it('retrieves a list of exercises', (done) => {
        //add an exercise to the API
        makeAPIRequest(mutationBuilder('addExercise', null, [
          exerciseFactory('Chin ups', 'Chest')
        ]))
        .then(() => {
          makeAPIRequest(queryBuilder('exercises', ['name']))
            .then(res => {
              const { body } = res;
              expect(body).to.be.graphQL({
                "exercises": [{
                  "name": "Chin ups"
                }]
              })
              done();
            });
        }); 
      });
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