const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require("../middleware/checkRoleMiddleWare");

router.post('/', checkRole, productController.create)
router.get ('/', productController.getAll)
router.get ('/:id', productController.getOne)

module.exports = router