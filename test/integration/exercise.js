import '../helpers/setup';
import { queryBuilder } from '../helpers/graphql-query-builder';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaiGraphQL from 'chai-graphql';
import app from '../../lib/app';

chai.use(chaiHttp);
chai.use(chaiGraphQL);

const testPort = 8081;

describe('API - Exercise', () => {
  describe('addExercise()', () => {
    it('adds an exercise', (done) => {
      chai.request(`http://localhost:${testPort}`)
        .post('/graphql')
        .send(queryBuilder('exercises', ['name']))
        .then((res) => {
          const { body } = res;
          expect(body).to.be.graphQL({ exercises: []})
          done();
        })
    })
  })
});