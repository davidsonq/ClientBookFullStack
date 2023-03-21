import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/appError.errors";

const verifyUserEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const exists: boolean = await userRepository.exist({
    where: { email: email },
  });

  if (exists) {
    throw new AppError("Email already created", 409);
  }

  return next();
};

export default verifyUserEmailMiddlewares;
