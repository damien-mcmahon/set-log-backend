import '../helpers/setup';
import { queryBuilder } from '../helpers/graphql-query-builder';
import chai, { expect } from 'chai';
import chaiGraphQL from 'chai-graphql';
import app from '../../lib/app';
import { makeAPIRequest } from '../helpers/make-request';

chai.use(chaiGraphQL);

describe('API - Exercise', () => {
  describe('addExercise()', () => {
    it('adds an exercise', (done) => {
      makeAPIRequest(queryBuilder('exercises', ['name']))
        .then((res) => {
          const { body } = res;
          expect(body).to.be.graphQL({ exercises: []})
          done();
        })
    })
  })
});