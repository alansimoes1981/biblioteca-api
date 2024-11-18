// import validateRoute from "../middlewares/validateRoute";
import {
	studentSchema,
	updatedStudentSchema,
} from "../controllers/students/schema";
import StudentsController from "../controllers/students";
import { Router } from "express";
import validateRoute from "../middlewares/validateRoute";
const router = Router();

router.get("/students", StudentsController.getAll);
router.get("/students/getByStatus/:status", StudentsController.getByStatus);
router.get("/students/:id", StudentsController.getOne);
router.delete("/students/:id", StudentsController.delete);
router.post(
	"/students",
	validateRoute(studentSchema),
	StudentsController.create
);
router.put(
	"/students/:id",
	validateRoute(updatedStudentSchema),
	StudentsController.update
);

export default router;
