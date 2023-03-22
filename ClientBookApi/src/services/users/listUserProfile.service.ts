import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import responseCreateUserSchemas from "../../schemas/users/responseUser.schemas";

const listUserProfileService = async (
  userId: string
): Promise<ReturnType<typeof responseCreateUserSchemas.parse>> => {
  const userRepository = AppDataSource.getRepository(User);

  const userResponse = await userRepository.findOne({
    where: { id: userId },
  });
  console.log(userResponse);

  const data = responseCreateUserSchemas.parse(userResponse);

  return data;
};

export default listUserProfileService;
