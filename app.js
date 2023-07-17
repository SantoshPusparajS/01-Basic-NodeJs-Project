import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from root path",
    application: "Natours Application",
  });
});

app.post("/", (req, res) => {
  res.send("Inside Post request");
});

app.listen(PORT, () => {
  console.log(`Server is listening at the ${PORT}`);
});
