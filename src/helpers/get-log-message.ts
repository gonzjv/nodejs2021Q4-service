import { IGetlogMessage } from '../interfaces/helpers.interface';

const getLogMessage: IGetlogMessage = (
  url,
  queryParams,
  body,
  statusCode
) =>
  `\nURL: ${url};\nQuery params: ${JSON.stringify(
    queryParams
  )};\nBody: ${JSON.stringify(
    body
  )}\nResponse status code: ${statusCode}`;

export default getLogMessage;
