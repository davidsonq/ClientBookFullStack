import { Request, Response } from "express";
import listContactIdService from "../../services/contacts/listContactId.service";

const listContactIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tokenId: string = req.authId.sub;

  const contactId: string = req.params.id;

  const data = await listContactIdService(tokenId, contactId);

  return res.status(200).json(data);
};

export default listContactIdController;
