interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface IUserToResponse {
  id: string;
  name: string;
  login: string;
}

interface IBodyFromRequest {
  name: string;
  login: string;
  password: string;
}

interface IUserToPut {
  name: string;
  login: string;
  password: string;
}

interface IUserToPost {
  id: string;
  name: string;
  login: string;
  password: string;
}

export { IUser, IUserToResponse, IBodyFromRequest, IUserToPut, IUserToPost };
