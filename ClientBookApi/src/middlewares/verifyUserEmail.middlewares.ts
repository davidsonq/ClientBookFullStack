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
  const { email, secondEmail } = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  if (email) {
    const existsEmail: boolean = await userRepository.exist({
      where: { email: email },
    });

    if (existsEmail) {
      throw new AppError("Email already created", 409);
    }

    const existsEmailInSecondEmail: boolean = await userRepository.exist({
      where: { secondEmail: email },
    });

    if (existsEmailInSecondEmail) {
      throw new AppError("Email already created", 409);
    }
  }

  if (secondEmail) {
    const existsSecondEmail: boolean = await userRepository.exist({
      where: { secondEmail: secondEmail },
    });

    if (existsSecondEmail) {
      throw new AppError("Second Email already created", 409);
    }

    const existsSecondEmailinEmail: boolean = await userRepository.exist({
      where: { email: secondEmail },
    });

    if (existsSecondEmailinEmail) {
      throw new AppError("Second Email already created", 409);
    }
  }

  return next();
};

export default verifyUserEmailMiddlewares;
