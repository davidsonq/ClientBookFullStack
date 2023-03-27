import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";
import formSchema from "@/schemas/contacts";
import { InputStyle } from "@/styles/InputStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ButtonS } from "../FormLogin/style";
import { iContactCreate } from "./interface";
import { AsideS } from "./style";

export default function ModalAddContacts() {
  const modalRef = UseOutCLick(() => setModal1(false));
  const { onSubmitFunctionContact, setModal1, modal1 } = useProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactCreate>({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      {modal1 && (
        <AsideS>
          <div ref={modalRef}>
            <div>
              <h3>Adicionar Contato</h3>
              <button
                onClick={() => {
                  setModal1(false);
                }}
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunctionContact)}>
              <InputStyle error={!!errors.email?.message}>
                <label htmlFor="email">
                  {errors.email?.message || "Email"}
                </label>
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
                <label htmlFor="phone">
                  {errors.phone?.message || "Telefone"}
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Digite seu número de telefone"
                  {...register("phone")}
                />
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
            </form>
          </div>
        </AsideS>
      )}
    </>
  );
}
