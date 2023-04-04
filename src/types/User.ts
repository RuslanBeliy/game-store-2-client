export interface User {
  _id: string;
  userName: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
