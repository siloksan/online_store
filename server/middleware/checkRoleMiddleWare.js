const AppError = require("../error/ApiError");

module.exports = function(req, res, next) {
	try {
		if (req.user.role !== 'ADMIN') {
			throw new Error('Только для администратора')
		}
		next()
	} catch (e) {
		next(AppError.forbidden(e.message))
	}
}
