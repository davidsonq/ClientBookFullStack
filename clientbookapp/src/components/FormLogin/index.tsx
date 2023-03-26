import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "@/schemas/login";
import { iUserLogin } from "./interface";
import { useProvider } from "@/contexts/authContext";
import Link from "next/link";
import { InputStyle } from "@/styles/InputStyle";
import { ButtonS } from "./style";

export default function FormLogin() {
  const { onSubmitFunctionLogin } = useProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
      <h2>Olá, bem-vindo de volta!</h2>
      <InputStyle error={!!errors.email?.message}>
        <label htmlFor="email">{errors.email?.message || "Email"}</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
      </InputStyle>
      <InputStyle error={!!errors.password?.message}>
        <label htmlFor="password">{errors.password?.message || "Senha"}</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
      </InputStyle>
      <ButtonS type="submit">Entrar</ButtonS>
      <span>
        Ainda não tem conta? <Link href={"/register"}>clique aqui!</Link>
      </span>
    </form>
  );
}
