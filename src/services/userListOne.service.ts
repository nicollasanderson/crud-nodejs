import { AppDataSource } from "../data-source";
import { User } from "../models/user.entity";

const userListOneService = async ({ id }: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default userListOneService;
