const User = require('../models/user');

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	if(!email && !password) {
		return res.status(422).send({error: 'Need both email and password'});
	}

	User.findOne({email: email}, function(err, existingUser) {
		if(err) {return next(err);}

		if(existingUser) {
			return res.status(422).send({error: 'email already exists'});
		}

		const user = new User({
			email: email,
			password: password
		});

		user.save(function(err){
			if(err) {return next(err);}
			res.send({success: true});
		});
	});
}