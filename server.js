import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening at the ${PORT}`);
});
