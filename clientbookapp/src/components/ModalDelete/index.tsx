import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";
import { AsideS } from "../ModalAddContacts/style";
import { DivS } from "./style";

export default function ModalDelete() {
  const modalRef = UseOutCLick(() => setModal3(false));
  const { modal3, setModal3, onSubmitFunctionContactDelete } = useProvider();
  return (
    <>
      {modal3 && (
        <AsideS>
          <div ref={modalRef}>
            <div>
              <h3>Excluir Contato</h3>
              <button
                onClick={() => {
                  setModal3(false);
                }}
              >
                X
              </button>
            </div>
            <DivS>
              <h4>Deseja excluir contato?</h4>

              <button
                type="button"
                onClick={() => {
                  onSubmitFunctionContactDelete();
                }}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal3(false);
                }}
              >
                Não
              </button>
            </DivS>
          </div>
        </AsideS>
      )}
    </>
  );
}
