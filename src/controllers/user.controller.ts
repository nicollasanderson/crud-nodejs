import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/user";
import userCreateService from "../services/userCreate.service";
import userDeleteService from "../services/userDelete.service";
import userListService from "../services/userList.service";
import userListOneService from "../services/userListOne.service";
import userListOne from "../services/userListOne.service";
import userUpdateService from "../services/userUpdate.service";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, age, password } = req.body;

    try {
      const userCreated = await userCreateService({
        name,
        email,
        age,
        password,
      });
      console.log(userCreated, "teste");

      return res.status(201).json(userCreated);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }

  async listUsers(req: Request, res: Response) {
    try {
      const users = await userListService();

      return res.status(200).json(users);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }

  async listOneUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await userListOneService({ id });

      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;

    const oldUser = await userListOne({ id });

    const {
      name = oldUser.name,
      email = oldUser.email,
      age = oldUser.age,
    } = req.body;

    try {
      const userUpdated = await userUpdateService({
        id,
        name,
        email,
        age,
      });

      return res.status(200).json(userUpdated);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await userDeleteService({ id });

      return res.status(204).json("User deleted.");
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}

export default UserController;
