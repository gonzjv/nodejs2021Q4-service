// import {
//   PORT_POSTGRES_HOST,
//   // PORT_POSTGRES_CONTAINER,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_DB,
// } from './src/common/config';

export default {
  type: 'postgres',
  // host: PORT_POSTGRES_HOST,
  host: 'postgres',
  port: 5432,
  // username: POSTGRES_USER,
  // password: POSTGRES_PASSWORD,
  // database: POSTGRES_DB,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
