import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

const userController = new UserController();

userRouter.post("", userController.createUser);
userRouter.get("", userController.listUsers);
userRouter.get("/:id", userController.listOneUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
