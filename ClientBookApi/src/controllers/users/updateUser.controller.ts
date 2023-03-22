import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updateUser: IUserUpdate = req.body;

  const userId: string = req.params.id;

  const data = await updateUserService(updateUser, userId);

  return res.status(200).json(data);
};

export default updateUserController;
