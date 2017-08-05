import _ from 'lodash';

function buildTypeSignature(queryOptions) {
  return _.isUndefined(queryOptions) ?
    '' :
    `(${
      queryOptions.map(q => `${q.variable}: ${q.type}${q.required ? '!' : ''}`).join(',')
    })`;
}

function buildQueryNameString(queryName, queryOptions) {
  return _.isUndefined(queryOptions) ? 
    queryName : 
    `${queryName} (${
      queryOptions.map(q => `${q.param}: ${q.variable}`).join(',')
    })`;
}

function buildVariablesObject(queryOptions) {
  return _.isUndefined(queryOptions) ? 
    undefined :
    {
      "variables": (
        queryOptions.reduce((acc, qO) => {
          acc[qO.param] = qO.value;
          return acc;
        }, {})
      )
    }
}

function genericQueryBuilder(type) {
  return (queryName, fields, queryOptions) => {
    const displayFields = fields ? `{ ${fields.join(',')} }` : '';
    const queryTypeSignature = buildTypeSignature(queryOptions); 
    const queryNameString = buildQueryNameString(queryName, queryOptions); 
    const variables = buildVariablesObject(queryOptions);
      
    const query = {
      "query": `${type} ${queryTypeSignature} { ${queryNameString} ${displayFields} }`
    };

    return { ...query, ...variables };
  }
}

export const queryBuilder = genericQueryBuilder('query');
export const mutationBuilder = genericQueryBuilder('mutation');