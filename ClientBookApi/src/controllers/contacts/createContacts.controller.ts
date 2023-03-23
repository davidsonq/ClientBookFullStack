import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts";
import createContactsService from "../../services/contacts/createContacts.service";

const createContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newContact: IContactRequest = req.body;

  const userId: string = req.authId.sub;

  const data = await createContactsService(newContact, userId);

  return res.status(201).json(data);
};

export default createContactsController;
