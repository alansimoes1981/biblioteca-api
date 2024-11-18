import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import OrderItemsService from "../../services/orderItemService";
import { v4 } from "uuid";
import {
	IOrderItemInput,
	IOrderItemInputUpdate,
	IResponseOrderItemGetALl,
} from "../../types/IOrderItems";

const orderItemsService = new OrderItemsService();

class OrderItemsController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const { studentName, status } = req.query;

			const allOrderItems: any[] = await orderItemsService.getAll({
				studentName: studentName as string,
				status: status as string,
			});

			const allOrderItemsFormatted = allOrderItems.map(
				(item: IResponseOrderItemGetALl) => {
					return {
						id: item.id,
						devolution_date: item.devolution_date,
						status: item.status,
						createdAt: item.createdAt,
						updatedAt: item.updatedAt,
						collection: {
							id: item.Collection.id,
							title: item.Collection.title,
						},
						student: {
							id: item.Student.id,
							name: item.Student.name,
							class: item.Student.class,
						},
					};
				}
			);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allOrderItemsFormatted));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const orderItem: any = await orderItemsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, orderItem));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const id = v4();

			const body: IOrderItemInput = {
				id,
				collection_id: req.body.collection_id,
				student_id: req.body.student_id,
				status: req.body.status,
				devolution_date: req.body.devolution_date,
			};

			const orderItemCreated = await orderItemsService.create(body);

			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, orderItemCreated));
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const dto: IOrderItemInputUpdate = {
				collection_id: req.body.collection_id,
				student_id: req.body.student_id,
				status: req.body.status,
				devolution_date: req.body.devolution_date,
			};
			await orderItemsService.update({ dto, id });

			const studentUpdated = await orderItemsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, studentUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async updateStatus(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await orderItemsService.updateStatus({ status: req.body.status }, id);

			const orderItemUpdated = await orderItemsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, orderItemUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await orderItemsService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default OrderItemsController;
