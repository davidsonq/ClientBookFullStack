import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";
import formSchema from "@/schemas/editContacts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { iContactCreate } from "../ModalAddContacts/interface";
import { InputStyle } from "@/styles/InputStyle";
import { AsideS } from "../ModalAddContacts/style";
import { ButtonS } from "../FormLogin/style";

export default function ModalEditContact() {
  const modalRef = UseOutCLick(() => setModal2(false));
  const { onSubmitFunctionContactEdit, setModal2, modal2, contactEdit } =
    useProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactCreate>({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      {modal2 && (
        <AsideS>
          <div ref={modalRef}>
            <div>
              <h3>Editar Contato</h3>
              <button
                onClick={() => {
                  setModal2(false);
                }}
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunctionContactEdit)}>
              <InputStyle error={!!errors.email?.message}>
                <label htmlFor="email">
                  {errors.email?.message || "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
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
              <ButtonS type="submit">Editar</ButtonS>
            </form>
          </div>
        </AsideS>
      )}
    </>
  );
}
