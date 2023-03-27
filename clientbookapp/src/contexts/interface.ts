import { iUserLogin } from "@/components/FormLogin/interface";
import { iUserRegister } from "@/components/FormRegister/interface";
import { iContactCreate } from "@/components/ModalAddContacts/interface";
import { iUserProps } from "@/pages/dashboard/interface";
import { Dispatch, SetStateAction } from "react";

export interface iAuthProviderData {
  onSubmitFunctionLogin: (userData: iUserLogin) => void;
  onSubmitFunctionRegister: (userData: iUserRegister) => void;
  onSubmitFunctionContact: (userData: iContactCreate) => void;
  onSubmitFunctionContactEdit: (userData: iContactCreate) => void;
  onSubmitFunctionContactGet: (id: string) => void;
  onSubmitFunctionContactDelete: () => void;
  useEye: string;
  setUseEye: Dispatch<SetStateAction<string>>;
  user: iUserProps | undefined;
  setLogin: Dispatch<SetStateAction<string>>;
  setModal1: Dispatch<SetStateAction<boolean>>;
  modal1: boolean;
  setModal2: Dispatch<SetStateAction<boolean>>;
  modal2: boolean;
  setModal3: Dispatch<SetStateAction<boolean>>;
  modal3: boolean;
  setContacts: Dispatch<SetStateAction<iContactResponse[]>>;
  contacts: iContactResponse[] | [];
  setContactEdit: Dispatch<SetStateAction<iContactResponse | undefined>>;
  contactEdit: iContactResponse | undefined;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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

export interface iContactResponse {
  id: string;
  name: string;
  email: string;
  secondEmail: string | null;
  phone: string;
  secondPhone: string | null;
  createdAt: string;
  updatedAt: string;
}
