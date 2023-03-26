import { useProvider } from "@/contexts/authContext";
import { iContactResponse } from "@/contexts/interface";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function CardContact({
  contact,
}: {
  contact: iContactResponse;
}) {
  const { id, name, email, secondEmail, phone, secondPhone } = contact;

  const { onSubmitFunctionContactGet, setModal2, setModal3 } = useProvider();
  return (
    <li>
      <h3>{name}</h3>
      <p>{email}</p>
      {!!secondEmail && <p>{secondEmail}</p>}
      <p>{phone}</p>
      {!!secondPhone && <p>{secondPhone}</p>}
      <button
        type="button"
        onClick={() => {
          onSubmitFunctionContactGet(id);
          setModal2(true);
        }}
      >
        <FiEdit />
      </button>
      <button
        type="button"
        onClick={() => {
          onSubmitFunctionContactGet(id);
          setModal3(true);
        }}
      >
        <FiTrash2 />
      </button>
    </li>
  );
}
