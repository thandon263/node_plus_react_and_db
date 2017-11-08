const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
// condense it down because we are not returning anything
// cause it is not assigned to anything.
require("./models/User");
require("./services/passport");

// connect to the mongodb database
mongoose.connect(keys.mongoURI);

// Instantiate the App by creating an Express engine
const app = express();

/***
Use cookies to authenticate user
Allowing permission and making Express handle
Cookies on the go.
- Tell passport to use cookies
***/
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// When we require an authRoutes file, it returns a function
// with an immediately invoked function with the (app) argument.
require("./routes/authRoutes")(app);

var information = {
  serverInfo: "Server is running on Port: 5000.",
  startUp: "npm start dev or nodemon",
  closeServerInfo: "ctrl ^C to close the server instance.",
  value: "\n\nHappy!!! Coding.\n\n"
};

var messages = () => {
  for (var i in information) {
    console.log(information[i]);
  }
};

const PORT = process.env.PORT || 5000;
const message = console.log(messages());
app.listen(PORT, message);

// localhost:5000
