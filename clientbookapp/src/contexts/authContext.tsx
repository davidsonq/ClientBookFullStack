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
  iLogin,
  iUserCreate,
} from "./interface";
import { iUserProps } from "@/pages/dashboard/interface";
import { iUserRegister } from "@/components/FormRegister/interface";

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthContextProvider = ({ children }: iAuthContextProvider) => {
  const router = useRouter();
  const [user, setUser] = useState<iUserProps>();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const requestProfile = async () => {
      const token = nookies.get(null, "ClientBookToken");

      if (token.ClientBookToken) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token.ClientBookToken}`;

          const { data } = await api.get<iUserProps>("/users/profile");

          setUser({ ...data });
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
    requestProfile();
  }, [login]);

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
        title: `Email está em uso, Por favor coloque outro email!`,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        user,
        setLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useProvider = () => useContext(AuthContext);
