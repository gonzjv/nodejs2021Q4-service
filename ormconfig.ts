import { ConnectionOptions } from 'typeorm';
import {
  PORT_POSTGRES_HOST,
  PORT_POSTGRES_CONTAINER,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} from './src/common/config';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: PORT_POSTGRES_HOST,
  port: Number(PORT_POSTGRES_CONTAINER),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
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

export default connectionOptions;
