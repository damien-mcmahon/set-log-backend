import _ from 'lodash';

export function queryBuilder(queryName, fields, queryOptions) {
  const displayFields = fields ? fields.join(',') : '';
  const queryTypeSignature = _.isUndefined(queryOptions) ?
    '' :
    `(${
      queryOptions.map(q => `${q.variable}: ${q.type}${q.required ? '!' : ''}`).join(',')
    })`;
  const queryNameString = _.isUndefined(queryOptions) ? 
    queryName : 
    `${queryName} (${
      queryOptions.map(q => `${q.param}: ${q.variable}`).join(',')
    })`;
  const variables = _.isUndefined(queryOptions) ? 
    undefined :
    {
      "variables": (
        queryOptions.reduce((acc, qO) => {
          acc[qO.param] = qO.value;
          return acc;
        }, {})
      )
    }
    
    //[] - {variable: '$id', type: 'ID', required: true, param: 'id', value: '111212'}
    //variables = queryOptions.reduce((a,q) => a[q.param] = q.value)
  const query = {
    "query": `query ${queryTypeSignature} { ${queryNameString} { ${displayFields} } }`
  };


  return {
    ...query,
    ...variables
  };
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