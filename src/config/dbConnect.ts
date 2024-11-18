import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbDialect = "postgres";

console.log(process.env.DB_URL_INTERNAL, process.env.NODE_ENV);

const sequelizeConnection =
	process.env.NODE_ENV === "production"
		? new Sequelize(process.env.DB_URL_INTERNAL as string, {
				dialect: dbDialect,
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
				},
		  })
		: new Sequelize(
				process.env.DB_NAME as string,
				process.env.DB_USERNAME as string,
				process.env.DB_PASSWORD as string,
				{
					host: process.env.DB_HOST,
					dialect: dbDialect,
				}
		  );

export default sequelizeConnection;
