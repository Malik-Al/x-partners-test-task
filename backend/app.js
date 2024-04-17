require("./src/db/connect");
const express = require("express");
const fileUpload = require("express-fileupload");
const config = require("./msdata/config.json");
const router = require("./src/routes/index");
const path = require("path");
const cors = require("cors");
const PORT = config.port;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "msdata/static")));
app.use(fileUpload({}));
app.use("/route", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    throw Error(error);
  }
};

start();
