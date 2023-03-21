import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const verifyZodMiddlewares =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default verifyZodMiddlewares;
