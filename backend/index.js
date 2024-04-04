const { config } = require("dotenv");
const app = require("./app");
const connectDB = require("./db");

config({ path: "./config.env" });
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
