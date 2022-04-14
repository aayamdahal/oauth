const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const port = process.env.port || 5000;
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

app.use(
  cookieSession({
    name: "session",
    keys: ["aayam"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.listen(port, () => {
  console.log(`Server up on ${port}`);
});
