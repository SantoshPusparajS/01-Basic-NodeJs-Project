import mongoose from "mongoose";

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

app.listen(PORT, () => {
  console.log(`Server is listening at the ${PORT}`);
});
