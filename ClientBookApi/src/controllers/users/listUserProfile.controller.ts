import { Request, Response } from "express";
import listUserProfileService from "../../services/users/listUserProfile.service";

const listUserProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.authId.sub;

  const data = await listUserProfileService(userId);

  return res.status(200).json(data);
};

export default listUserProfileController;
