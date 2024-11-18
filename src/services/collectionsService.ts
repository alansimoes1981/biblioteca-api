import {
	ICollectionInput,
	ICollectionInputUpdate,
} from "../types/ICollections";
import Collections from "../db/models/collection";
import ErrorNotFound from "../errors/errorNotFound";
import { Op } from "sequelize";
import OrderItems from "../db/models/orderItem";
import ErrorBase from "../errors/errorBase";

class CollectionsService {
	async getAll() {
		return await Collections.findAll({
			attributes: ["id", "title", "author", "status"],
		});
	}

	async getByTitleOrAuthor(search: string) {
		return await Collections.findAll({
			attributes: ["id", "title", "author", "status"],
			where: {
				[Op.or]: [
					{ title: { [Op.iLike]: `%${search}%` } },
					{ author: { [Op.iLike]: `%${search}%` } },
				],
			},
		});
	}

	async getByStatus(status: string) {
		return await Collections.findAll({ where: { status: status } });
	}

	async findOne(id: string) {
		const data = await Collections.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: ICollectionInput) {
		return await Collections.create(dto);
	}

	async update({ dto, id }: { dto: ICollectionInputUpdate; id: string }) {
		const data = await this.findOne(id);
		if (data) {
			return await Collections.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async updateStatus(dto: Partial<ICollectionInput>, id: string) {
		const data = await this.findOne(id);

		if (data) {
			return await Collections.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);

		if (data) {
			const orderItemActiveVinculateToCollection = await OrderItems.findOne({
				where: { collection_id: id, status: true },
			});

			if (orderItemActiveVinculateToCollection !== null) {
				throw new ErrorBase(
					"Cannot be delete because have order item active vinculate to this collection",
					400
				);
			}

			return await Collections.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default CollectionsService;
