import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import listUserProfileController from "../../controllers/users/listUserProfile.controller";
import authUserMiddleware from "../../middlewares/authUser.middilewares";
import verifyUserEmailMiddlewares from "../../middlewares/verifyUserEmail.middlewares";
import verifyZodMiddlewares from "../../middlewares/verifyZod.middleware";
import { createUserSchemas } from "../../schemas/users/createUsers.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyZodMiddlewares(createUserSchemas),
  verifyUserEmailMiddlewares,
  createUserController
);

userRoutes.get("/profile", authUserMiddleware, listUserProfileController);

export default userRoutes;
