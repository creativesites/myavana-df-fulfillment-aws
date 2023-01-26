const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    sessionId: {
      type: String
    },
    prompt: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: "Users" }
);

module.exports = mongoose.model("users", user);