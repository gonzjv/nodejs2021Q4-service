import express, { Request, Response, NextFunction } from 'express';

// const express = require('express');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');
// const YAML = require('yamljs');
// const userRouter = require('./resources/users/user.router');
// const boardRouter = require('./resources/boards/board.router');
// const { PORT } = require('./common/config');
// const app = require('./app.ts');

const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

// app.use(express.json());

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// app.use('/users', userRouter);

// app.use('/boards', boardRouter);

// app.listen(PORT, () =>
app.listen(4000, () =>
  // console.log(`App is running on http://localhost:${PORT}`)
  console.log(`App is running on http://localhost:4000`)
);
// module.exports = app;
