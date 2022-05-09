import express from "express";
import "reflect-metadata";
import "express-async-errors";
import userRouter from "./routers/user.router";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server running.");
});

export default app;
