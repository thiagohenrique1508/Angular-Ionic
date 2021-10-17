export class UserModel {
  constructor(
      public email: string,
      public image: string,
      public name: string,
      public roles: string[],
      public token: string,
      public username: string,
  ) {

  }
// eslint-disable-next-line eol-last
}
