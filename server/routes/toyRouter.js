const Router = require('express')
const router = new Router()
const toyController = require('../controllers/toyController')


router.post('/', toyController.create)
router.get('/', toyController.getAll)
router.get('/:id', toyController.getOne)
//можно добавить метод DEL

module.exports = router