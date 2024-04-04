const bcrypt = require("bcryptjs");
const hashPasswordfunc = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
};

module.exports = { hashPasswordfunc };
