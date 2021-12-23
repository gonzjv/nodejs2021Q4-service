// import * as express from 'express';

interface IGetlogMessage {
  (
    url: string,
    queryParams: { [key: string]: string },
    body: object,
    statusCode: number
  ): string;
}

export { IGetlogMessage };
