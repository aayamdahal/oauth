const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const GOOGLE_CLIENT_ID =
  "1070934406129-iq88p6qs9ei7e5c64luokc0bmr1k0k6m.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "e6b16efe9aadb1d2ff65";
const GITHUB_CLIENT_SECRET = "662106a30caa423d20e9bccda9f71f40721c166f";
const FACEBOOK_CLIENT_ID = "965023520830304";
const FACEBOOK_CLIENT_SECRET = "0d8f888b8561277d5fe4cbe6d0ad36ac";

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

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
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
