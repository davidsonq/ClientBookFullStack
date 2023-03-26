import { useProvider } from "@/contexts/authContext";
import { iContactResponse } from "@/contexts/interface";
import CardContact from "../CardContacts";

export default function ListContacts() {
  const { contacts } = useProvider();
  return (
    <>
      {!contacts.length ? (
        <div>
          <h2>Nenhum contato foi criado clique em adicionar!</h2>
        </div>
      ) : (
        <div>
          <ul>
            {contacts.map((contact: iContactResponse) => (
              <CardContact key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
