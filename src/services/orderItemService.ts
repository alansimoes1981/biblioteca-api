import {
	IOrderItem,
	IOrderItemInput,
	IOrderItemInputUpdate,
} from "../types/IOrderItems";
import OrderItems from "../db/models/orderItem";
import ErrorNotFound from "../errors/errorNotFound";
import Collections from "../db/models/collection";
import Students from "../db/models/students";
import dayjs from "dayjs";
import ErrorBase from "../errors/errorBase";
import { Op } from "sequelize";

class OrderItemService {
	async getAll({
		studentName,
		status,
	}: {
		studentName?: string;
		status?: string;
	}) {
		function parseBoolean(value?: string): boolean | undefined {
			if (value == "true") return true;
			if (value == "false") return false;
			return undefined;
		}

		const filterByStatus =
			status !== undefined ? { status: parseBoolean(status) } : {};

		const filterByStudentName =
			studentName !== undefined
				? {
						name: { [Op.iLike]: `%${studentName}%` },
				  }
				: {};

		return OrderItems.findAll({
			attributes: ["id", "devolution_date", "status"],
			include: [
				{
					model: Collections,
					attributes: ["id", "title", "author"],
				},
				{
					model: Students,
					attributes: ["id", "name", "class"],
					where: filterByStudentName,
				},
			],

			where: filterByStatus,
		});
	}

	async updateStatus(dto: Partial<IOrderItemInput>, id: string) {
		const data = await this.findOne(id);

		if (data) {
			return await OrderItems.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async findOne(id: string) {
		const data = await OrderItems.findOne({
			where: { id },
		});

		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: IOrderItemInput) {
		const currentDay = dayjs();

		if (dayjs(dto.devolution_date).isAfter(currentDay)) {
			const collection = await Collections.findByPk(dto.collection_id);
			const student = await Students.findByPk(dto.student_id);

			if (collection === null || student === null) {
				throw new ErrorBase("Collection or Student Not Found", 404);
			}
			return await OrderItems.create(dto);
		}
		throw new ErrorBase("Devolution date need to be after today", 400);
	}

	async update({ dto, id }: { dto: IOrderItemInputUpdate; id: string }) {
		const currentDay = dayjs();
		const data = await this.findOne(id);

		if (data) {
			if (dayjs(dto.devolution_date).isAfter(currentDay)) {
				const collection = await Collections.findByPk(dto.collection_id);
				const student = await Students.findByPk(dto.student_id);

				if (collection === null || student === null) {
					throw new ErrorBase("Collection or Student Not Found", 404);
				}
				return await OrderItems.update(dto, { where: { id: id } });
			}
			throw new ErrorBase("Devolution date need to be after today", 400);
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);

		if (data) {
			return await OrderItems.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default OrderItemService;
