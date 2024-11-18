// import validateRoute from "../middlewares/validateRoute";
import { updatedUserSchema, userSchema } from "../controllers/users/schema";
import UsersController from "../controllers/users";
import { Router } from "express";
import validateRoute from "../middlewares/validateRoute";
const router = Router();

router.get("/users", UsersController.getAll);
router.get("/users/:id", UsersController.getOne);
router.delete("/users/:id", UsersController.delete);
router.post("/users", validateRoute(userSchema), UsersController.create);
router.put(
	"/users/:id",
	validateRoute(updatedUserSchema),
	UsersController.update
);

export default router;
