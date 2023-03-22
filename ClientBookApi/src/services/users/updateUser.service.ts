import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError.errors";
import { IUserUpdate } from "../../interfaces/users";
import responseCreateUserSchemas from "../../schemas/users/responseUser.schemas";

const updateUserService = async (
  newUpdateUser: IUserUpdate,
  userId: string,
  tokenId: string
): Promise<ReturnType<typeof responseCreateUserSchemas.parse>> => {
  if (userId !== tokenId) {
    throw new AppError("Invalid access check past id!", 404);
  }

  const userRepository = AppDataSource.getRepository(User);

  const userResponse = await userRepository.find({
    select: [
      "email",
      "id",
      "name",
      "password",
      "secondEmail",
      "phone",
      "secondPhone",
      "isAdm",
      "createdAt",
      "updatedAt",
    ],
    withDeleted: true,
    where: { id: userId },
  });

  if (!userResponse.length) {
    throw new AppError("Updating users is not allowed", 404);
  }

  if (!Object.keys(newUpdateUser).length) {
    throw new AppError("Updating users is not allowed", 401);
  }

  const updateUser = userRepository.create({
    ...userResponse[0],
    ...newUpdateUser,
  });

  await userRepository.save(updateUser);

  const data = responseCreateUserSchemas.parse(updateUser);

  return data;
};

export default updateUserService;
