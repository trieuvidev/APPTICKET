const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AccountSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  userType: { type: String, default: "client" },
  avatar: { type: String }
});

AccountSchema.pre("save", async function (next) {
  const user = this;// obj user
  console.log(user);
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

const Account = mongoose.model("Account", AccountSchema, "Account")

module.exports = {
  AccountSchema, Account
}
