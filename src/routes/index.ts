import { Application, Router } from "express";
import bodyParser from "body-parser";
import auth from "./authRoutes";
import users from "./usersRoutes";
import students from "./studentsRoutes";
import collections from "./collectionsRoutes";
import orderItems from "./orderItemsRoutes";
import authMiddleware from "../middlewares/auth";

export default (app: Application) => {
	const router = Router();
	const middlewareAuth = router.use(authMiddleware);

	app.use(
		bodyParser.json(),
		auth,
		users,
		middlewareAuth,
		students,
		collections,
		orderItems
	);
};
