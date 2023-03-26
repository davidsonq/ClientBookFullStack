import HeadComponent from "@/components/Head";
import Header from "@/components/Header";
import ListContacts from "@/components/ListContacts";
import ModalAddContacts from "@/components/ModalAddContacts";
import ModalDelete from "@/components/ModalDelete";
import ModalEditContact from "@/components/ModalEditContact";
import { useProvider } from "@/contexts/authContext";

export default function Dashbord() {
  const { setModal1 } = useProvider();
  return (
    <>
      <HeadComponent />
      <Header />
      <main>
        <div>
          <button
            type="button"
            onClick={(e) => {
              setModal1(true);
            }}
          >
            Adicionar
          </button>
        </div>
        <div>
          <h2>Contatos</h2>
          <ul>
            <li>Nome</li>
            <li>E-mail</li>
            <li>Segundo e-mail</li>
            <li>Número de telefone</li>
            <li>Segundo telefone</li>
          </ul>
        </div>
        <ListContacts />
        <ModalAddContacts />
        <ModalEditContact />
        <ModalDelete />
      </main>
    </>
  );
}
