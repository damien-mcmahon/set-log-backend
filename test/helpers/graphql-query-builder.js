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

export function queryBuilder(queryName, fields, queryOptions) {
  const displayFields = fields ? fields.join(',') : '';
  const queryTypeSignature = buildTypeSignature(queryOptions); 
  const queryNameString = buildQueryNameString(queryName, queryOptions); 
  const variables = buildVariablesObject(queryOptions);
    
  const query = {
    "query": `query ${queryTypeSignature} { ${queryNameString} { ${displayFields} } }`
  };

  return { ...query, ...variables };
};

export function mutationBuilder(mutationName, mutationOptions, mutationData) {
  return {
    "query": `mutation (${mutationTypeSignature}) { ${mutationMethod}}`,
    "variables": {
      //data
    }
  }
}

//
//{
//    "query": "mutation ($data: ExerciseInput!) { addExercise(data: $data) }",
//    "variables": {
//        "data": {
//            "name": "Sit ups",
//            "bodyAreaTargeted": "Back, Abs"
//        }
//    }
//}
//