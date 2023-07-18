import { readFileSync } from "fs";
import { connect } from "mongoose";
import { config, configDotenv } from "dotenv";
import { createTours, deleteTour } from "../controllers/tourController.js";
import Tour from "../models/tourModel.js";

config({ path: "../.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

connect(DB).then(() => console.log("DB connection successful!"));

// READ JSON FILE
const tours = JSON.parse(readFileSync("./tours-simple.json", "utf-8"));
console.log(tours);
// IMPORT DATA INTO DB
const importData = async () => {
  console.log("Inside Import Data");
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
