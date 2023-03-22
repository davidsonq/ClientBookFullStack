import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const listContactsService = async (tokenId: string): Promise<Contact[]> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactsResponse = await contactsRepository.find({
    where: {
      user: { id: tokenId },
    },
  });

  return contactsResponse;
};

export default listContactsService;
