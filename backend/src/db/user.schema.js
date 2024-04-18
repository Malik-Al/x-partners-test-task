const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  email: {
    type: Schema.Types.String,
    require: true,
  },
  password: {
    type: Schema.Types.String,
    require: true,
  },
  date_birth: {
    type: Schema.Types.Date,
    require: true,
  },
  gender: {
    type: Schema.Types.String,
    require: true,
  },
  img: {
    type: Schema.Types.String,
    require: true,
  }
});

module.exports = new mongoose.model('User', User);;
