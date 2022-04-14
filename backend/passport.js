const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "1070934406129-iq88p6qs9ei7e5c64luokc0bmr1k0k6m.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
