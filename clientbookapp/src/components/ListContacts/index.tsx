import { useProvider } from "@/contexts/authContext";
import { iContactResponse } from "@/contexts/interface";
import CardContact from "../CardContacts";
import { DivListS, UlS } from "./style";

export default function ListContacts() {
  const { contacts } = useProvider();
  return (
    <>
      {!contacts.length ? (
        <DivListS>
          <h2>Nenhum contato foi criado clique em adicionar!</h2>
        </DivListS>
      ) : (
        <DivListS>
          <UlS>
            {contacts.map((contact: iContactResponse) => (
              <CardContact key={contact.id} contact={contact} />
            ))}
          </UlS>
        </DivListS>
      )}
    </>
  );
}
