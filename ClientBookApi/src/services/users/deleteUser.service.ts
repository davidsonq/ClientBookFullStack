import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError.errors";

const deleteUserServices = async (
  id: string,
  userId: string
): Promise<void> => {
  if (id !== userId) {
    throw new AppError("Invalid access check past id!", 404);
  }
  const userRepository = AppDataSource.getRepository(User);

  const userResponse = await userRepository.find({
    withDeleted: true,
    where: { id: id },
  });

  if (!userResponse.length) {
    throw new AppError("Deleting users is not allowed!", 404);
  }

  if (!userResponse[0].isActive) {
    throw new AppError("Deleting users is not allowed!", 400);
  }

  await userRepository.softRemove(userResponse[0]);

  await userRepository.save({ ...userResponse[0], isActive: false });
};

export default deleteUserServices;
