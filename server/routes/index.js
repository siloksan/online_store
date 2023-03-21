const Router = require('express')
const router = new Router()
const toyRouter = require('./toyRouter')
const userRouter = require('./userRouter')
// const typeRouter = require('./typeRouter')
// const brandRouter = require('./brandRouter')

router.use('/user', userRouter)
// router.use('/type', typeRouter)
// router.use('/brand', brandRouter)
router.use('/toy', toyRouter)

module.exports = router