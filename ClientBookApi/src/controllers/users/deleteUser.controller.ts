import { Request, Response } from "express";
import deleteUserServices from "../../services/users/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  await deleteUserServices(id);

  return res.status(204).send();
};

export default deleteUserController;
