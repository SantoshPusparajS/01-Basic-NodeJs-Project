import express from "express";
import morgan from "morgan";

import tourRouter from "./routes/tourRoutes.js";
import userRouter from "./routes/userRoutes.js";
import AppError from "./errorHandling/appError.js";
import errorController from "./errorHandling/appErrorController.js";

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routing
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

//Error Handling
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find a ${req.originalUrl}`, 404));
});

//Error Handling Middleware
app.use(errorController);

export default app;
