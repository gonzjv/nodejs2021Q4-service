import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import { PORT } from './common/config';
import { IApp } from './interfaces/app.interface';

// const userRouter = require('./resources/users/user.router');
// const boardRouter = require('./resources/boards/board.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next): IApp => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});
// app.use('/users', userRouter);
// app.use('/boards', boardRouter);

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
