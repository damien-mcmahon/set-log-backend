import { queryBuilder } from '../../helpers/graphql-query-builder';
import { expect } from 'chai';

describe('Test Helpers -  GraphQL Query Builder', () => {
  describe('queryBuilder()', () => {
    it('creates a simple query object', () => {
      expect(queryBuilder('test', ['one'])).to.eql({
        "query": "query  { test { one } }"
      });
    });

    it('comma separates queries with many fields', () => {
      expect(queryBuilder('commas', ['one', 'two'])).to.eql({
        "query": "query  { commas { one,two } }"
      })
    });

    it('creates complex queries that pass data', () => {
      const queryOptions = [
        {variable: '$id', type: 'ID', required: true, param: 'id', value: '11112'}
       ];
      const expectedOutput = {
        "query": "query ($id: ID!) { complex (id: $id) { one,two } }",
        "variables": {
          "id": "11112"
        }
      };

      expect(queryBuilder('complex', ['one', 'two'], queryOptions)).to.eql(expectedOutput);
    });

    it('creates a complex query with multiple inputs', () => {
      const queryOptions = [
        {
          variable: '$email', 
          type: 'String',
          required: true, 
          param: 'email', 
          value: 'test@example.com'
        },
        {
          variable: '$password',
          type: 'String',
          required: false,
          param: 'password',
          value: '123456'
        }
      ];
      const expectedOutput = {
       "query": "query ($email: String!,$password: String) { options (email: $email,password: $password) { one } }",
        "variables": {
          "email": "test@example.com",
          "password": "123456"
        } 
      }
      expect(queryBuilder('options', ['one'], queryOptions)).to.eql(expectedOutput)
    })
  })
});