import {
	collectionSchema,
	updateStatusCollectionSchema,
} from "../controllers/collections/schema";
import CollectionsController from "../controllers/collections";
import { Router } from "express";
import validateRoute from "../middlewares/validateRoute";
const router = Router();

router.get("/collections", CollectionsController.getAll);
router.get(
	"/collections/getByTitleOrAuthor/:search",
	CollectionsController.getByTitleOrAuthor
);
router.get(
	"/collections/getByStatus/:status",
	CollectionsController.getByStatus
);
router.get("/collections/:id", CollectionsController.getOne);
router.delete("/collections/:id", CollectionsController.delete);
router.post(
	"/collections",
	validateRoute(collectionSchema),
	CollectionsController.create
);

router.put(
	"/collections/updateStatus/:id",
	validateRoute(updateStatusCollectionSchema),
	CollectionsController.updateStatus
);
router.put(
	"/collections/:id",
	validateRoute(collectionSchema),
	CollectionsController.update
);

export default router;
