import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProvider } from "@/contexts/authContext";
import { iUserRegister } from "./interface";
import formSchema from "@/schemas/register";
import Link from "next/link";

export default function FormRegister() {
  const { onSubmitFunctionRegister } = useProvider();

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
      <div>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <label htmlFor="email">{errors.email?.message || "Email"}</label>
      </div>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome completo"
          {...register("name")}
        />
        <label htmlFor="name">{errors.name?.message || "Nome"}</label>
      </div>
      <div>
        <input
          type="text"
          id="phone"
          placeholder="Digite seu número de telefone"
          {...register("phone")}
        />
        <label htmlFor="phone">{errors.phone?.message || "Telefone"}</label>
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <label htmlFor="password">{errors.password?.message || "Senha"}</label>
      </div>
      <div>
        <input
          type="password"
          id="confirm"
          placeholder="Confirme sua senha!"
          {...register("confirm")}
        />
        <label htmlFor="confirm">
          {errors.confirm?.message || "Confirmar Senha"}
        </label>
      </div>
      <div>
        <input
          type="text"
          id="secondEmail"
          placeholder="Digite um segundo e-mail"
          {...register("secondEmail")}
        />
        <label htmlFor="secondEmail">
          {errors.secondEmail?.message || "Segundo e-mail"}
        </label>
      </div>
      <div>
        <input
          type="text"
          id="secondPhone"
          placeholder="Digite um segundo número de telefone"
          {...register("secondPhone")}
        />
        <label htmlFor="secondPhone">
          {errors.secondPhone?.message || "Segundo telefone"}
        </label>
      </div>
      <button type="submit">Entrar</button>
      <span>
        Já possui conta? <Link href={"/"}>clique aqui!</Link>
      </span>
    </form>
  );
}
