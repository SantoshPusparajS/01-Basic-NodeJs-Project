import mongoose from "mongoose";

//Handling Uncaught expections
//Always below the dependency import
process.on("uncaughtException", () => {
  console.log(err);
  process.exit(1);
});

import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  //console.log(con.connections);
  console.log("Db connected successfully!");
});

const server = app.listen(PORT, () => {
  console.log(`Server is listening at the ${PORT}`);
});

//Handling unreferenced error
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
