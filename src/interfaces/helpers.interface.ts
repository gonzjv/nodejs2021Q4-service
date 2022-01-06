// import * as express from 'express';

interface IGetlogMessage {
  (
    method: string,
    url: string,
    queryParams: { [key: string]: string },
    body: object,
    statusCode: number
  ): string;
}

export { IGetlogMessage };
