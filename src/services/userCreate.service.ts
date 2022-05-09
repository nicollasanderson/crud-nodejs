import { AppDataSource } from "../data-source";
import { IUserCreate } from "../interfaces/user";
import { User } from "../models/user.entity";
import * as bcrypt from "bcryptjs";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailExists = users.find((user) => user.email === email);

  if (emailExists) {
    throw new Error("Email already exists.");
  }

  const user = new User();

  (user.name = name),
    (user.email = email),
    (user.password = await bcrypt.hash(password, 8)),
    (user.age = age);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
