import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError.errors";
import { IContactRequest } from "../../interfaces/contacts";
import responseContactsSchemas from "../../schemas/contacts/responseContacts.schemas";

const createContactsService = async (
  newContact: IContactRequest,
  userId: string
): Promise<ReturnType<typeof responseContactsSchemas.parse>> => {
  const ContactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOne({
    where: { id: userId },
  });

  if (!userExist) {
    throw new AppError("User not found!", 404);
  }

  const ContactResponse: Contact = ContactRepository.create(newContact);

  await ContactRepository.save(ContactResponse);

  await ContactRepository.update(
    { id: ContactResponse.id },
    { user: userExist }
  );

  const data = responseContactsSchemas.parse(ContactResponse);

  return data;
};

export default createContactsService;
