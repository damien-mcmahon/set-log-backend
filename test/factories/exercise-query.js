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