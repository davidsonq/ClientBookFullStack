import { Router } from "express";
import createContactsController from "../../controllers/contacts/createContacts.controller";
import listContactsController from "../../controllers/contacts/listContacts.controller";
import authUserMiddleware from "../../middlewares/authUser.middilewares";
import verifyContactEmailMiddlewares from "../../middlewares/verifyContactEmail.middlewares";
import verifyZodMiddlewares from "../../middlewares/verifyZod.middleware";
import createContactsSchemas from "../../schemas/contacts/createContact.schemas";

const contactRoutes = Router();

contactRoutes.post(
  "",
  authUserMiddleware,
  verifyZodMiddlewares(createContactsSchemas),
  verifyContactEmailMiddlewares,
  createContactsController
);
contactRoutes.get("", authUserMiddleware, listContactsController);
contactRoutes.get("/:id", authUserMiddleware);
contactRoutes.patch("/:id", authUserMiddleware);
contactRoutes.delete("/:id", authUserMiddleware);

export default contactRoutes;
