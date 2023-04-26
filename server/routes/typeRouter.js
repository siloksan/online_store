const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleWare')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, checkRole, typeController.create)
router.get ('/', typeController.getAll)

module.exports = router