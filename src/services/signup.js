const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(userdata) {
    const { name, email, password} = userdata;
   const hashedPassword = await bcrypt.hash(password,10);
   const createUser = new User({
    name,
    email,
    password: hashedPassword,
    role: "costomer"
   });

  const saveUser = await createUser.save();
  return saveUser;
} 

module.exports = { createUser }