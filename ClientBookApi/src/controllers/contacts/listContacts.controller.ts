import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tokenId: string = req.authId.sub;

  const data = await listContactsService(tokenId);

  return res.status(200).json(data);
};

export default listContactsController;
