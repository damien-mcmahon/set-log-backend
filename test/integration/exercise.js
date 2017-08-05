import '../helpers/setup';
import { queryBuilder, mutationBuilder } from '../helpers/graphql-query-builder';
import chai, { expect } from 'chai';
import chaiGraphQL from 'chai-graphql';
import app from '../../lib/app';
import { makeAPIRequest } from '../helpers/make-request';

chai.use(chaiGraphQL);

describe('API - Exercise', () => {
  describe('addExercise()', () => {
    it('adds an exercise', (done) => {
      makeAPIRequest(mutationBuilder('addExercise', null, [
        {
          variable: '$data',
          type: 'ExerciseInput',
          required: true,
          param: 'data',
          value: {
            "name": "Chin ups",
            "bodyAreaTargeted": "Chest"
          }
        }
      ]))
        .then((res) => {
          const { body } = res;
          expect(body).to.be.graphQL({ addExercise: true})
          done();
        })
    })
  })
});