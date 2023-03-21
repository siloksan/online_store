//generates a random ID
const uuid = require('uuid')
const path = require('path')
const {Toy} = require('../models/models')
const ApiError = require('../error/ApiError')

class ToyController {
		async create(req, res, next) {
			try {
				const {name, price, brandId, typeId} = req.body
				const {img} = req.files
				let fileName = uuid.v4() + ".jpg"
				//moving the file to the static directory
				img.mv(path.resolve(__dirname, '..', 'static', fileName))

				const toy = await Toy.create({name, price, brandId, typeId, img: fileName})

				return res.json(toy)
			} catch (e) {
				next(ApiError.badRequest(e.message))
			}
		}

		async getAll(req, res) {
			const {brandId, typeId} = req.query
			let toys;
			if (!brandId && !typeId) {
				toys = await Toy.findAll()
			}
			if (brandId && !typeId) {
				toys = await Toy.findAll({where: {brandId}})
			}
			if (!brandId && typeId) {
				toys = await Toy.findAll({where: {typeId}})
			}
			if (brandId && typeId) {
				toys = await Toy.findAll({where: {brandId, typeId}})
			}
			return res.json(toys)
		}

		async getOne(req, res) {

		}
}

module.exports = new ToyController()