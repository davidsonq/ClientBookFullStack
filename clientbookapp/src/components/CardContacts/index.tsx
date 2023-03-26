import { useProvider } from "@/contexts/authContext";
import { iContactResponse } from "@/contexts/interface";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function CardContact({
  contact,
}: {
  contact: iContactResponse;
}) {
  const { id, name, email, secondEmail, phone, secondPhone } = contact;

  const { onSubmitFunctionContactGet } = useProvider();
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
        }}
      >
        <FiEdit />
      </button>
      <button type="button" onClick={() => {}}>
        <FiTrash2 />
      </button>
    </li>
  );
}
