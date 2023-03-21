export interface IUserRequest {
  email: string;
  secondEmail?: string;
  phone: string;
  secondPhone?: string;
  password: string;
  name: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  phone: string;
  secondEmail: string | null;
  secondPhone: string | null;
  isActive: boolean;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  usersContacts?: string[];
}
