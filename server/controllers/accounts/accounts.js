const { Account } = require("../../model/Account");

const registerUsers = async (req, res, next) => {
  const errorExceptions = [];
  const successExceptions = [];
  const { email, password, phone, fullName } = req.body;
  try {
    const newUser = new Account({ email, password, phone, fullName });

    const user = await Account.findOne({ email });
    if (user) {
      errorExceptions.push({ status: 422, account: "Account is exists" });
      throw new Error(errorExceptions);
    }
    await newUser.save();
    successExceptions.push({ status: 200, message: "Register account successfuly" })
    return res.status(200).json({ success: successExceptions, account: newUser })
  } catch (error) {
    return res.status(500).json({ error: errorExceptions})
  }
};

module.exports = {
  registerUsers
}