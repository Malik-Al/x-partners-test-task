const mongoose = require("mongoose");
const config = require("../../../msdata/config.json");
const user = require("./user.schema.js")

const db = {};
db.mongoose = mongoose;
db.url = config.mongo.url;
db.user = (user, mongoose);

module.exports = db;
