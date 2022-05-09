import { AppDataSource } from "../data-source";
import { IUserUpdate } from "../interfaces/user";
import { User } from "../models/user.entity";

const userUpdateService = async ({ id, name, email, age }: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User not found");
  }

  await userRepository.update(account!.id, { name, email, age });

  const newUser = userRepository.findOneBy({ id });

  return newUser;
};

export default userUpdateService;
