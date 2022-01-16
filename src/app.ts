import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
// import pino from 'pino-http';
import { stdout } from 'process';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { usersRouter } from './resources/users/user.router';
import { PORT_NODE_HOST } from './common/config';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';
import handleUserError from './error-handlers/handle-user-error';
// import { User } from './entity/User';
// import connectionOptions from '../ormconfig';

createConnection()
  .then(async () => {
    // console.log('Inserting a new user into the database...');
    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log(`Saved a new user with id: ${user.id}`);

    // console.log('Loading users from the database...');
    // const users = await connection.manager.find(User);
    // console.log('Loaded users: ', users);

    // console.log(
    //   'Here you can setup and run express/koa/any other framework.'
    // );

    const app = express();
    const swaggerDocument = YAML.load(
      path.join(__dirname, '../doc/api.yaml')
    );

    app.use(express.json());
    app.use(
      '/doc',
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocument)
    );
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
  })
  .catch((error) => console.log(error));
