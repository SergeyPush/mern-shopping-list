const { model, Schema } = require("mongoose");

const UserSChema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

const User = model("User", UserSChema);

module.exports = User;
