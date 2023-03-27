import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import AppError from "../../errors/appError.errors";
import responseContactsSchemas from "../../schemas/contacts/responseContacts.schemas";

const listContactIdService = async (
  tokenId: string,
  contactId: string
): Promise<ReturnType<typeof responseContactsSchemas.parse>> => {
  const contact = await AppDataSource.createQueryBuilder()
    .select("contacts")
    .from(Contact, "contacts")
    .leftJoinAndSelect("contacts.user", "user")
    .where("contacts.id = :id", { id: contactId })
    .andWhere("contacts.user = :user", { user: tokenId })
    .getOne();

  if (!contact) {
    throw new AppError("Invalid access check past id!", 401);
  }

  const data = responseContactsSchemas.parse(contact);

  return data;
};

export default listContactIdService;
