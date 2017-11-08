const mongoose = require("mongoose");
const { Schema } = mongoose;

// Describe how every object will be structured in the database.
// How a user will look like
// Freely add or subtract properties in the schema
const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
