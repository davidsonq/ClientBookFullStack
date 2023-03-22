import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import responseCreateUserSchemas from "../../schemas/users/responseUser.schemas";

const listUserProfileService = async (
  userId: string
): Promise<ReturnType<typeof responseCreateUserSchemas.parse>> => {
  const userResponse = await AppDataSource.createQueryBuilder()
    .select("users")
    .from(User, "users")
    .leftJoinAndSelect("users.contacts", "contacts")
    .where("users.id = :id", { id: userId })
    .getOne();

  const data = responseCreateUserSchemas.parse(userResponse);

  return data;
};

export default listUserProfileService;
