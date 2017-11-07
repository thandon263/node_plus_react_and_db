const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// condense it down because we are not returning anything
// cause it is not assigned to anything.
require("./services/passport");

// connect to the mongodb database
mongoose.connect(keys.mongoURI);

// Instantiate the App by creating an Express engine
const app = express();

// When we require an authRoutes file, it returns a function
// with an immediately invoked function with the (app) argument.
require("./routes/authRoutes")(app);

const PORT = process.env.PORT;
app.listen(PORT || 5000, console.log("Server is running on Port: 5000."));

// localhost:5000
