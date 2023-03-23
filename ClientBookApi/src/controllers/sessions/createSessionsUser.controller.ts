import { Request, Response } from "express";
import { ISessionUser } from "../../interfaces/sessions";
import createSessionUserService from "../../services/sessions/createSessionUser.service";

const createSessionUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newSessionUser: ISessionUser = req.body;

  const token: string = await createSessionUserService(newSessionUser);

  return res.status(200).json({ token });
};

export default createSessionUserController;
