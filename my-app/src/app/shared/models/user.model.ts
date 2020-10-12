export class User implements IUser{
  id: string;
  firstName: string;
  lastName: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}
