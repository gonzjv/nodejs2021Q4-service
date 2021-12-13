class UserError extends Error {
  isUserError: boolean;

  constructor(message: string) {
    super(message);
    this.name = 'UserError';
    this.isUserError = true;
  }
}

export default UserError;
