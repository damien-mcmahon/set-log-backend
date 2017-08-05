const DB_STRING = 'mongodb://localhost/graphql'
const TEST_DB_STRING = 'mongodb://localhost/test'
const TEST_ENV = 'TEST';

export function getConnectionString() {
  return process.env.NODE_ENV === TEST_ENV ? TEST_DB_STRING : DB_STRING;  
}
