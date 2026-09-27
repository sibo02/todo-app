const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", require("./routes/todos"));

app.get("/", (req, res) => {
  res.send("Todo API is running!");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});