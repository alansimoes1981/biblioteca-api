import OrderItemsController from "../controllers/orderItems";
import { Router } from "express";
import validateRoute from "../middlewares/validateRoute";
import {
	orderItemSchema,
	updateStatusOrderItemSchema,
} from "../controllers/orderItems/schema";
const router = Router();

router.get("/orderItems", OrderItemsController.getAll);
router.get("/orderItems/:id", OrderItemsController.getOne);
router.delete("/orderItems/:id", OrderItemsController.delete);
router.post(
	"/orderItems",
	validateRoute(orderItemSchema),
	OrderItemsController.create
);

router.put(
	"/orderItems/updateStatus/:id",
	validateRoute(updateStatusOrderItemSchema),
	OrderItemsController.updateStatus
);
router.put(
	"/orderItems/:id",
	validateRoute(orderItemSchema),
	OrderItemsController.update
);

export default router;
