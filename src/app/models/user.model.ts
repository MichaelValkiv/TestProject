export class UserModel {
  constructor(
    public name?: string,
    public username?: string,
    public email?: string,
    public phone?: string,
    public address?:
      {
        street?: string,
        suite?: string,
        city?: string,
        zipcode?: string,
      },
  ) {
  }
}
