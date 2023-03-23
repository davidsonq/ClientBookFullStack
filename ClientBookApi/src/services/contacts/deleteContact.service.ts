import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import AppError from "../../errors/appError.errors";

const deleteContactsService = async (userId: string, contactId: string) => {
  const contact = await AppDataSource.createQueryBuilder()
    .delete()
    .from(Contact)
    .where("id = :id", { id: contactId })
    .andWhere("user = :user", { user: userId })
    .execute();

  if (contact.affected === 0) {
    throw new AppError("Invalid access check past id!", 401);
  }
};

export default deleteContactsService;
