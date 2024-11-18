import express from "express";
import dotenv from "dotenv";
import { associations } from "./db/models/associations";
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json";

dotenv.config();

const app = express();
app.use("/swagger-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile)); // Serve the Swagger UI

routes(app);
app.use(errorHandler);

associations();

app.listen(process.env.PORT || 3100, () => {
	console.log(`${process.env.APP_NAME} running on port ${process.env.PORT}`);
});

app.get("/", () => {
	console.log("to no ar");
});

export default app;
