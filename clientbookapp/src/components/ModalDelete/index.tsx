import { useProvider } from "@/contexts/authContext";
import { UseOutCLick } from "@/hook/UseOutClick";

export default function ModalDelete() {
  const modalRef = UseOutCLick(() => setModal3(false));
  const { modal3, setModal3, onSubmitFunctionContactDelete } = useProvider();
  return (
    <>
      {modal3 && (
        <aside>
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
            <div>
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
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
