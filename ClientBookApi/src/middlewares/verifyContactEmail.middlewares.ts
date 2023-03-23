import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contacts.entity";
import AppError from "../errors/appError.errors";

const verifyContactEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, secondEmail } = req.body;

  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (email) {
    const existsEmail: boolean = await contactsRepository.exist({
      where: { email: email },
    });

    if (existsEmail) {
      throw new AppError("Email already created", 409);
    }

    const existsEmailInSecondEmail: boolean = await contactsRepository.exist({
      where: { secondEmail: email },
    });

    if (existsEmailInSecondEmail) {
      throw new AppError("Email already created", 409);
    }
  }

  if (secondEmail) {
    const existsSecondEmail: boolean = await contactsRepository.exist({
      where: { secondEmail: secondEmail },
    });

    if (existsSecondEmail) {
      throw new AppError("Second Email already created", 409);
    }

    const existsSecondEmailinEmail: boolean = await contactsRepository.exist({
      where: { email: secondEmail },
    });

    if (existsSecondEmailinEmail) {
      throw new AppError("Second Email already created", 409);
    }
  }

  return next();
};

export default verifyContactEmailMiddlewares;
