const mongoose = require("../configuration/dbConfig");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {type: String, enum:["admin", "costomer"], default: "costomer" }
});

module.exports = mongoose.model("User", UserSchema);