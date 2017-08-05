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
      expect(queryBuilder('complex', ['one', 'two'], [
        {variable: '$id', type: 'ID', required: true, param: 'id', value: '11112'}
       ])).to.eql({
          "query": "query ($id: ID!) { complex (id: $id) { one,two } }",
          "variables": {
            "id": "11112"
          }
      });
    });
  })
});