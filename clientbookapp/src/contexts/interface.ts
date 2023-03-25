import { iUserLogin } from "@/components/FormLogin/interface";
import { iUserRegister } from "@/components/FormRegister/interface";
import { iUserProps } from "@/pages/dashboard/interface";
import { Dispatch, SetStateAction } from "react";

export interface iAuthProviderData {
  onSubmitFunctionLogin: (userData: iUserLogin) => void;
  onSubmitFunctionRegister: (userData: iUserRegister) => void;
  user: iUserProps | undefined;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export interface iAuthContextProvider {
  children: React.ReactNode;
}

export interface iLogin {
  token: string;
}

export interface iUserCreate {
  id: string;
  name: string;
  email: string;
  secondEmail: string | null;
  phone: string;
  secondPhone: string | null;
  isAdm: boolean;
  createdAt: string;
  updatedAt: string;
}
