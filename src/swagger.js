const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const host = "api-freela-biblioteca.onrender.com";

const doc = {
	info: {
		title: "API BIBLIOTECA",
		description: "API documentation endpoints",
	},
	host: host,
	schemes: ["https"], // Define o esquema dependendo do ambiente
	securityDefinitions: {
		bearerAuth: {
			type: "apiKey",
			name: "Authorization",
			in: "header",
			description:
				'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}"',
		},
	},
	security: [{ bearerAuth: [] }],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = [
	"./src/routes/authRoutes.ts",
	"./src/routes/collectionsRoutes.ts",
	"./src/routes/orderItemsRoutes.ts",
	"./src/routes/studentsRoutes.ts",
	"./src/routes/usersRoutes.ts",
];

// Gera a documentação Swagger
swaggerAutogen(outputFile, endpointsFiles, doc);
