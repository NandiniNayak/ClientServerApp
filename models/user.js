const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true // only google auth requires required field
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  },
  // credits for user
  credits: {
    type: Number,
    default: 0
  }
});
// create collection and add schema
mongoose.model("users", UserSchema);
