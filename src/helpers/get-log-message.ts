import { IGetlogMessage } from '../interfaces/helpers.interface';

const getLogMessage: IGetlogMessage = (
  method,
  url,
  queryParams,
  body,
  statusCode
) =>
  `\nMethod: ${method};\nURL: ${url};\nQuery params: ${JSON.stringify(
    queryParams
  )};\nBody: ${JSON.stringify(
    body
  )}\nResponse status code: ${statusCode}`;

export default getLogMessage;
