import { Request, Response } from "express";
import deleteUserServices from "../../services/users/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const userId: string = req.authId.sub;

  await deleteUserServices(id, userId);

  return res.status(204).send();
};

export default deleteUserController;
