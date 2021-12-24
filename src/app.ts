import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import pino from 'pino-http';
import { exit, stderr, stdout } from 'process';
import { usersRouter } from './resources/users/user.router';
import { PORT } from './common/config';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';

const app = express();
const swaggerDocument = YAML.load(
  path.join(__dirname, '../doc/api.yaml')
);

app.use(express.json());
app.use(pino());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next): undefined | void => {
  req.log.info(
    `\nURL: ${req.originalUrl};\nQuery params: ${JSON.stringify(
      req.params
    )};\nBody: ${JSON.stringify(req.body)}`
  );
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

try {
  app.use('/users', usersRouter);
  app.use('/boards', boardRouter);
  app.use('/boards', taskRouter);
} catch (error: unknown) {
  if (error instanceof Error) {
    stderr.write(error.message);
    exit(1);
  }
}

app.listen(PORT, () => {
  stdout.write(`App is running on http://localhost:${PORT} \n`);
});
