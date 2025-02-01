export interface IUser {
  email: string;
  password: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}

export type UserLogin = Pick<IUser, "email" | "password">;
