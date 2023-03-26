import { iUserLogin } from "@/components/FormLogin/interface";
import { api } from "@/services/Api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  iAuthContextProvider,
  iAuthProviderData,
  iContactResponse,
  iLogin,
  iUserCreate,
} from "./interface";
import { iUserProps } from "@/pages/dashboard/interface";
import { iUserRegister } from "@/components/FormRegister/interface";
import { iContactCreate } from "@/components/ModalAddContacts/interface";

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthContextProvider = ({ children }: iAuthContextProvider) => {
  const router = useRouter();
  const [user, setUser] = useState<iUserProps>();
  const [contacts, setContacts] = useState<iContactResponse[] | []>([]);
  const [login, setLogin] = useState(false);
  const [contactEdit, setContactEdit] = useState<iContactResponse>();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const MySwal = withReactContent(Swal);

  const ToastSuccess = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#168821",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const ToastError = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#B53147",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const requestProfile = async () => {
    const token = nookies.get(null, "ClientBookToken");

    if (token.ClientBookToken) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token.ClientBookToken}`;

        const { data } = await api.get<iUserProps>("/users/profile");

        setUser({ ...data });
        setContacts([...data.contacts]);
      } catch (error) {
        console.error(error);
      }
      router.push("/dashboard");
    } else if (router.pathname === "/register") {
      router.push("/register");
    } else {
      router.push("/");
    }
  };

  const onSubmitFunctionLogin = async (userData: iUserLogin) => {
    try {
      const response = await api.post<iLogin>("/login", userData);

      setCookie(null, "ClientBookToken", response.data.token, {
        maxAge: 43200,
        path: "/",
      });
      setLogin(true);
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail ou senha inválida!`,
      });
    }
  };

  const onSubmitFunctionRegister = async (userData: iUserRegister) => {
    try {
      await api.post<iUserCreate>("/users", userData);
      ToastSuccess.fire({
        icon: "success",
        title: `Conta criada com sucesso!`,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail está em uso ou é um e-mail inválido!`,
      });
    }
  };

  const onSubmitFunctionContact = async (userData: iContactCreate) => {
    try {
      const response = await api.post<iContactResponse>("/contacts", userData);
      ToastSuccess.fire({
        icon: "success",
        title: `Contato adicionado com sucesso!`,
      });
      setContacts([...contacts, response.data]);
      setModal1(false);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Email está em uso, Por favor coloque outro email!`,
      });
    }
  };

  const onSubmitFunctionContactEdit = async (userData: iContactCreate) => {
    for (const prop in userData) {
      if (!userData[prop]) {
        delete userData[prop];
      }
    }
    try {
      await api.patch<iContactResponse>(
        `/contacts/${contactEdit?.id}`,
        userData
      );
      ToastSuccess.fire({
        icon: "success",
        title: `Contato editado com sucesso!`,
      });
      location.reload();
      setModal2(false);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `E-mail está em uso ou é um e-mail inválido!`,
      });
    }
  };

  const onSubmitFunctionContactGet = async (id: string) => {
    try {
      const response = await api.get<iContactResponse>(`/contacts/${id}`);
      setContactEdit({ ...response.data });
      setModal2(true);
    } catch (error) {
      console.error(error);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Erro na solicitação!`,
      });
    }
  };
  useEffect(() => {
    requestProfile();
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        onSubmitFunctionContact,
        onSubmitFunctionContactEdit,
        onSubmitFunctionContactGet,
        user,
        setLogin,
        setModal1,
        setModal2,
        modal2,
        modal1,
        contacts,
        setContacts,
        contactEdit,
        setContactEdit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useProvider = () => useContext(AuthContext);
