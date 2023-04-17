import {Sequelize} from "sequelize";

export default new Sequelize(
	process.env.DB_NAME, //database name
	process.env.DB_USER, // user postgres name
	process.env.DB_PASS, // user postgres password
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT
	}
)