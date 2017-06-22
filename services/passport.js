const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractStrategy;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret 
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	User.findByOne(payload.sub, function(err, user) {
		if(err) {return done(err, false);}

		if(user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

passport.use(jwtLogin);