const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://ahmadsholehpondokit:jR0FRvAnVaTYGBp7@backend.ip0bc.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=backend", 
    {
    serverSelectionTimeoutMS: 5000
    });

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    }); 

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connecting to error: ${err}`);
    });

module.exports = mongoose;