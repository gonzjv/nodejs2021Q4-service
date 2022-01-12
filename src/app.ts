import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
// import pino from 'pino-http';
import { stdout } from 'process';
import { usersRouter } from './resources/users/user.router';
import { PORT_NODE_HOST } from './common/config';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';
import handleUserError from './error-handlers/handle-user-error';
import { createConnection } from 'typeorm';
import connectionOptions from '../ormconfig';

const app = express();
const swaggerDocument = YAML.load(
  path.join(__dirname, '../doc/api.yaml')
);
const start = async () => {
  await createConnection(connectionOptions);
};

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next): undefined | void => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', usersRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.use(handleUserError);

app.listen(PORT_NODE_HOST, () => {
  stdout.write(
    `App is running on http://localhost:${PORT_NODE_HOST} \n`
  );
});

start().catch(console.error);
