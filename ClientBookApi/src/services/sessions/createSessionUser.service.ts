import AppDataSource from "../../data-source";
import "dotenv/config";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError.errors";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { ISessionUser } from "../../interfaces/sessions";

const createSessionUserService = async (
  newSession: ISessionUser
): Promise<string> => {
  const { email, password } = newSession;

  const userResponse = await AppDataSource.createQueryBuilder()
    .select("users")
    .from(User, "users")
    .addSelect("users.password")
    .where("users.email = :email", { email: email })
    .getOne();

  if (!userResponse) {
    throw new AppError("Email or password not found!", 400);
  }

  const passwordSeach = await compare(password, userResponse.password);

  if (!passwordSeach) {
    throw new AppError("Email or password not found!", 403);
  }

  const secretKey: string = process.env.SECRET_KEY!;

  const token = jwt.sign(
    { email: userResponse.email, isAdm: userResponse.isAdm },
    secretKey,
    {
      algorithm: "HS256",
      expiresIn: "24h",
      subject: userResponse.id,
    }
  );

  return token;
};

export default createSessionUserService;
