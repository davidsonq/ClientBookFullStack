import { Request, Response } from "express";
import deleteContactsService from "../../services/contacts/deleteContact.service";

const deleteContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.authId.sub;

  const contactId: string = req.params.id;

  await deleteContactsService(userId, contactId);

  return res.status(204).send();
};

export default deleteContactsController;
