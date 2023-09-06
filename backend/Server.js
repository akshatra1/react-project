const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const routes = require("./routes/TaskRoutes")

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Error connecting to mongo: ${err}`);
  });

app.use("/api",routes)
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.get("/", (req, res) => {
  res.send("hello world");
});
