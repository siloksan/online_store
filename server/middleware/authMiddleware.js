const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === 'OPTION') {
		next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1]//TokenType token
		if (!token) {
			return res.status(401).json({message: 'Not authorized'})
		}
		req.user = jwt.verify(token, process.env.SECRET_KEY)
		next()
	} catch (e) {
		res.status(401).json({message: 'Not authorized'})
	}
}