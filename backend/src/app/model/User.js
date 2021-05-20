const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String
});
const User = mongoose.model("User", schema);

class UserModel {
  async getUser() {
    var user = await User.find({});
    return { message: "hello user world", user };
       
  }
}

module.exports = new UserModel();
