export function exerciseFactory(name = 'Test', bodyAreaTargeted = 'Arms') {
  return {
    variable: '$data',
    type: 'ExerciseInput',
    required: true,
    param: 'data',
    value: {
      "name": name,
      "bodyAreaTargeted": bodyAreaTargeted
    }
  };
};

export function exerciseIdFactory(id = '') {
 return {
    variable: '$id',
    type: 'ID',
    required: true,
    param: 'id',
    value: id
  }; 
};