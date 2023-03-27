import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contacts";
import updateContactsService from "../../services/contacts/updateContact.service";

const updateContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.authId.sub;

  const contactId: string = req.params.id;

  const newUpdateContact: IContactUpdate = req.body;

  const data = await updateContactsService(newUpdateContact, contactId, userId);

  return res.status(200).json(data);
};

export default updateContactsController;
