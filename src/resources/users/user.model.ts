import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../../interfaces/user.interface';

class User implements IUser {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(body: IUser) {
    return new User(body);
  }

  static toPut(id: string, user: IUser) {
    const { name, login, password } = user;
    return { id, name, login, password };
  }
}

export default User;
