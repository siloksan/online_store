const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define('basket', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketToys = sequelize.define('basket_toys', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Toy = sequelize.define('toy', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
	price: {type: DataTypes.INTEGER, allowNull: false},
	rating: {type: DataTypes.INTEGER, defaultValue: 0},
	// feedback: {type: DataTypes.STRING, allowNull: true},
	img: {type: DataTypes.STRING, allowNull: false},
})

//Пока нет мыслей как использовать!?
// const Type = sequelize.define('type', {
// 	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// 	name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })
//
// const Brand = sequelize.define('brand', {
// 	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// 	name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })
//До этой строки не использую, все зависимости прописаны

const Rating = sequelize.define('rating', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	rate: {type: DataTypes.INTEGER, allowNull: false},
})

// const FeedBack = sequelize.define('feedback', {
// 	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// 	feedBack: {type: DataTypes.STRING, allowNull: true},
// })

const ToyInfo = sequelize.define('toy_info', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	title: {type: DataTypes.STRING, allowNull: false},
	description: {type: DataTypes.STRING, allowNull: false},
})

// const TypeBrand = sequelize.define('type_brand', {
// 	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

// User.hasMany(FeedBack)
// FeedBack.belongsTo(User)

Basket.hasMany(BasketToys)
BasketToys.belongsTo(Basket)

// Type.hasMany(Toy)
// Toy.belongsTo(Type)
//
// Brand.hasMany(Toy)
// Toy.belongsTo(Brand)

Toy.hasMany(Rating)
Rating.belongsTo(Toy)

// Toy.hasMany(FeedBack)
// FeedBack.belongsTo(Toy)

Toy.hasMany(BasketToys)
BasketToys.belongsTo(Toy)

Toy.hasMany(ToyInfo)
ToyInfo.belongsTo(Toy)

// Type.belongsToMany(Brand, {through: TypeBrand})
// Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
	User,
	Basket,
	BasketToys,
	Toy,
	ToyInfo,
	// Type,
	// Brand,
	Rating,
	// FeedBack,
	// TypeBrand
}