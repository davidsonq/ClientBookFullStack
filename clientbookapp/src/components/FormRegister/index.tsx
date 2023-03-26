import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProvider } from "@/contexts/authContext";
import { iUserRegister } from "./interface";
import { InputStyle } from "@/styles/InputStyle";
import formSchema from "@/schemas/register";
import Link from "next/link";
import { ButtonS } from "../FormLogin/style";
import { ButtonEye } from "../ButtonEyes";

export default function FormRegister() {
  const { onSubmitFunctionRegister, useEye } = useProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
      <h2>Suba a bordo!</h2>
      <InputStyle error={!!errors.email?.message}>
        <label htmlFor="email">{errors.email?.message || "Email"}</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
      </InputStyle>
      <InputStyle error={!!errors.name?.message}>
        <label htmlFor="name">{errors.name?.message || "Nome"}</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome completo"
          {...register("name")}
        />
      </InputStyle>
      <InputStyle error={!!errors.phone?.message}>
        <label htmlFor="phone">{errors.phone?.message || "Telefone"}</label>
        <input
          type="text"
          id="phone"
          placeholder="Digite seu número de telefone"
          {...register("phone")}
        />
      </InputStyle>
      <InputStyle error={!!errors.password?.message}>
        <label htmlFor="password">{errors.password?.message || "Senha"}</label>
        <input
          type={useEye}
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <ButtonEye />
      </InputStyle>
      <InputStyle error={!!errors.confirm?.message}>
        <label htmlFor="confirm">
          {errors.confirm?.message || "Confirmar Senha"}
        </label>
        <input
          type={useEye}
          id="confirm"
          placeholder="Confirme sua senha!"
          {...register("confirm")}
        />
        <ButtonEye />
      </InputStyle>
      <InputStyle error={!!errors.secondEmail?.message}>
        <label htmlFor="secondEmail">
          {errors.secondEmail?.message || "Segundo e-mail"}
        </label>
        <input
          type="text"
          id="secondEmail"
          placeholder="Digite um segundo e-mail"
          {...register("secondEmail")}
        />
      </InputStyle>
      <InputStyle error={!!errors.secondPhone?.message}>
        <label htmlFor="secondPhone">
          {errors.secondPhone?.message || "Segundo telefone"}
        </label>
        <input
          type="text"
          id="secondPhone"
          placeholder="Digite um segundo número de telefone"
          {...register("secondPhone")}
        />
      </InputStyle>
      <ButtonS type="submit">Cadastrar</ButtonS>
      <span>
        Já possui conta? <Link href={"/"}>clique aqui!</Link>
      </span>
    </form>
  );
}
