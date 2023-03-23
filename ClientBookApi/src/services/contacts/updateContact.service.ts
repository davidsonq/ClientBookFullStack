import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import AppError from "../../errors/appError.errors";
import { IContactUpdate } from "../../interfaces/contacts";
import responseContactsSchemas from "../../schemas/contacts/responseContacts.schemas";

const updateContactsService = async (
  newUpdateContact: IContactUpdate,
  contactId: string,
  userId: string
): Promise<ReturnType<typeof responseContactsSchemas.parse>> => {
  const contact = await AppDataSource.createQueryBuilder()
    .update(Contact)
    .set(newUpdateContact)
    .where("id = :id", { id: contactId })
    .andWhere("user = :user", { user: userId })
    .returning("*")
    .execute();

  if (contact.affected === 0) {
    throw new AppError("Invalid access check past id!", 401);
  }

  const data = responseContactsSchemas.parse(contact.raw[0]);

  return data;
};

export default updateContactsService;
