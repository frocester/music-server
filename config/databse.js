const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successful");
    })
    .catch((err) => {
      console.log(err);
      console.error(error.message);
    });
};

module.exports = dbConnect;
