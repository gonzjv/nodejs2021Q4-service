import * as express from 'express';
import pino from 'pino';
import getLogMessage from '../helpers/get-log-message';

class Logger {
  logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  info(req: express.Request, res: express.Response) {
    this.logger.info(
      getLogMessage(
        req.method,
        req.originalUrl,
        req.params,
        req.body,
        res.statusCode
      )
    );
  }

  error(req: express.Request, res: express.Response) {
    this.logger.error(
      getLogMessage(
        req.method,
        req.originalUrl,
        req.params,
        req.body,
        res.statusCode
      )
    );
  }
}

export default Logger;
