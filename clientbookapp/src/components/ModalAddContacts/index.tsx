import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";
import formSchema from "@/schemas/contacts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { iContactCreate } from "./interface";

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
        <aside>
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
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite aqui seu email"
                  {...register("email")}
                />
                <label htmlFor="email">
                  {errors.email?.message || "Email"}
                </label>
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
                <label htmlFor="phone">
                  {errors.phone?.message || "Telefone"}
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
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </aside>
      )}
    </>
  );
}
