import { AppDataSource } from "../data-source";
import { User } from "../models/user.entity";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  if (!users) {
    throw new Error("Not found");
  }

  return users;
};

export default userListService;
