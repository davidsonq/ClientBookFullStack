import HeadComponent from "@/components/Head";
import Header from "@/components/Header";
import ListContacts from "@/components/ListContacts";
import ModalAddContacts from "@/components/ModalAddContacts";
import ModalDelete from "@/components/ModalDelete";
import ModalEditContact from "@/components/ModalEditContact";
import { useProvider } from "@/contexts/authContext";
import { ContatoS, MainS } from "./style";

export default function Dashbord() {
  const { setModal1 } = useProvider();
  return (
    <>
      <HeadComponent />
      <Header />
      <MainS>
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
        <ContatoS>
          <h2>Contatos</h2>
        </ContatoS>
        <ListContacts />
        <ModalAddContacts />
        <ModalEditContact />
        <ModalDelete />
      </MainS>
    </>
  );
}
