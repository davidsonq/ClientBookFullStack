import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserProfileController from "../../controllers/users/listUserProfile.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import authUserMiddleware from "../../middlewares/authUser.middilewares";
import verifyUserEmailMiddlewares from "../../middlewares/verifyUserEmail.middlewares";
import verifyZodMiddlewares from "../../middlewares/verifyZod.middleware";
import createUserSchemas from "../../schemas/users/createUsers.schemas";
import updateUserSchemas from "../../schemas/users/updateUsers.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyZodMiddlewares(createUserSchemas),
  verifyUserEmailMiddlewares,
  createUserController
);

userRoutes.get("/profile", authUserMiddleware, listUserProfileController);

userRoutes.delete("/:id", authUserMiddleware, deleteUserController);

userRoutes.patch(
  "/:id",
  authUserMiddleware,
  verifyZodMiddlewares(updateUserSchemas),
  updateUserController
);

export default userRoutes;
