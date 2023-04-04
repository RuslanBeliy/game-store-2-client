import { User } from './User';

export interface AuthServerResponse {
  token: string;
  userData: User;
}
export interface RegisterUser extends Omit<User, '_id' | 'createdAt' | 'updatedAt'> {}
export interface LoginUser extends Pick<User, 'email'> {
  password: string;
}
