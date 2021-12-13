import IError from '../interfaces/error.interface';

const { exit, stderr } = process;

const handleUserError = (err: IError) => {
  const { name, message } = err;
  stderr.write(`${name}: ${message}\n`);

  exit(1);
};

export default handleUserError;
