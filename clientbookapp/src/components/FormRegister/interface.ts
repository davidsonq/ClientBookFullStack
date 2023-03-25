export interface iUserRegister {
  name: string;
  email: string;
  password: string;
  confirm: string;
  secondEmail: string | null;
  secondPhone: string | null;
  phone: string;
}
