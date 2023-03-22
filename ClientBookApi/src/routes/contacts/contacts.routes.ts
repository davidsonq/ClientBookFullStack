import { Router } from "express";
import createContactsController from "../../controllers/contacts/createContacts.controller";
import authUserMiddleware from "../../middlewares/authUser.middilewares";
import verifyUserEmailMiddlewares from "../../middlewares/verifyUserEmail.middlewares";
import verifyZodMiddlewares from "../../middlewares/verifyZod.middleware";
import createContactsSchemas from "../../schemas/contacts/createContact.schemas";

const contactRoutes = Router();

contactRoutes.post(
  "",
  authUserMiddleware,
  verifyZodMiddlewares(createContactsSchemas),
  verifyUserEmailMiddlewares,
  createContactsController
);
contactRoutes.get("", authUserMiddleware);
contactRoutes.patch("/:id", authUserMiddleware);
contactRoutes.delete("/:id", authUserMiddleware);

export default contactRoutes;
