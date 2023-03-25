export interface iUserProps {
  id: string;
  name: string;
  email: string;
  secondEmail: string | null;
  phone: string;
  secondPhone: string | null;
  isAdm: boolean;
  createdAt: string;
  updatedAt: string;
  contact: [];
}
