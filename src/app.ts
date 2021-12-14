import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
// import { IApp } from './interfaces/app.interface';
import { exit, stderr, stdout } from 'process';
import { usersRouter } from './resources/users/user.router';
import { PORT } from './common/config';
import { boardRouter } from './resources/boards/board.router';
// import handleError from './error-handlers/handle-error';
// import UserError from './error-handlers/user-error';

// const userRouter = require('./resources/users/user.router');
// const boardRouter = require('./resources/boards/board.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next): undefined | void => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

try {
  app.use('/users', usersRouter);
  app.use('/boards', boardRouter);
} catch (error: unknown) {
  if (error instanceof Error) {
    stderr.write(error.message);
    exit(1);
  }
}

app.listen(PORT, () => {
  stdout.write(`App is running on http://localhost:${PORT}`);
});
