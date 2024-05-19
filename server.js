const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const musicRoutes = require("./routes/entryEndpoint");

app.use("/api/v1", musicRoutes);

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});

const dbConnect = require("./config/databse");
dbConnect();
