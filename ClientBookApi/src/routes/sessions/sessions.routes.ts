import { Router } from "express";
import createSessionUserController from "../../controllers/sessions/createSessionsUser.controller";
import verifyZodMiddlewares from "../../middlewares/verifyZod.middleware";
import createSessionsUserSchemas from "../../schemas/sessions/sessionsUser.schemas";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  verifyZodMiddlewares(createSessionsUserSchemas),
  createSessionUserController
);

export default sessionRoutes;
