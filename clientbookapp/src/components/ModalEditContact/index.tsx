import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";
import formSchema from "@/schemas/editContacts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { iContactCreate } from "../ModalAddContacts/interface";

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
        <aside>
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
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
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
              <button type="submit">Editar</button>
            </form>
          </div>
        </aside>
      )}
    </>
  );
}
