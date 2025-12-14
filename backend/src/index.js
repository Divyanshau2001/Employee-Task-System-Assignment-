require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/tasks", require("./routes/task.routes"));

app.listen(5000, () => console.log("Server running on 5000"));
