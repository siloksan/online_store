import sequelize from "./sequelize.js";
import database from 'sequelize'

const { DataTypes } = database

//description model

//model "user", database table "users"
const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

//model "Basket", database table "baskets"
const Basket = sequelize.define('basket', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// link between the basket and the product through the intermediate table "basket_products"
// this table will have a composite primary key (basket_id + product_id)
const BasketProduct = sequelize.define('basket_product', {
	quantity: {type: DataTypes.INTEGER, defaultValue: 1},
})

// model «Product», database table «products»
const Product = sequelize.define('product', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
	price: {type: DataTypes.INTEGER, allowNull: false},
	rating: {type: DataTypes.INTEGER, defaultValue: 0},
	image: {type: DataTypes.STRING, allowNull: false},
})

// model «Category», database table «categories»
const Category = sequelize.define('category', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

// link between the product and the user will be carried out through an intermediate table «rating»
// this table will have a composite primary key (product_id + user_id)
const Rating = sequelize.define('rating', {
	rate: {type: DataTypes.INTEGER, allowNull: false},
})

// product properties, one product can have many properties
const ProductProp = sequelize.define('product_prop', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull: false},
	value: {type: DataTypes.STRING, allowNull: false},
})

//description of links

// link between many-to-many of products and baskets using an intermediate table basket_products;
// the product can be in several baskets, and there can be many products in the basket
Basket.belongsToMany(Product, { through: BasketProduct, onDelete: 'CASCADE' })
Product.belongsToMany(Basket, { through: BasketProduct, onDelete: 'CASCADE' })

// super many-to-many https://sequelize.org/master/manual/advanced-many-to-many.html
// this makes it possible to use any include when querying findAll, findOne, findByPk
Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)
Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

// link a category with a product: there can be several products in a category
// but each product can belong to only one category
Category.hasMany(Product, {onDelete: 'RESTRICT'})
Product.belongsTo(Category)

// link between many-to-many of products and users using an intermediate table rating;
// multiple registered users can vote for one product
// one user can vote for several products
Product.belongsToMany(User, {through: Rating, onDelete: 'CASCADE'})
User.belongsToMany(Product, {through: Rating, onDelete: 'CASCADE'})

// super many-to-many https://sequelize.org/master/manual/advanced-many-to-many.html
// this makes it possible to use any include when querying findAll, findOne, findByPk
Product.hasMany(Rating)
Rating.belongsTo(Product)
User.hasMany(Rating)
Rating.belongsTo(User)

// link a product with its properties: each product can have several properties, но
// but each property linked to only one product
Product.hasMany(ProductProp, {as: 'props', onDelete: 'CASCADE'})
ProductProp.belongsTo(Product)

export {
	User,
	Basket,
	Product,
	Category,
	Rating,
	BasketProduct,
	ProductProp
}