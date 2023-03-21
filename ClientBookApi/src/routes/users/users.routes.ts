import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
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

export default userRoutes;
