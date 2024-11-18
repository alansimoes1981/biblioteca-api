import { IStudentInput, IStudentInputUpdate } from "../types/IStudents";
import Students from "../db/models/students";
import ErrorNotFound from "../errors/errorNotFound";
import ErrorBase from "../errors/errorBase";
import OrderItems from "../db/models/orderItem";
import { Op } from "sequelize";

class StudentsService {
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

		const filters: any = {};

		if (status !== undefined) {
			const parsedStatus = parseBoolean(status);
			if (parsedStatus !== undefined) {
				filters.status = parsedStatus;
			}
		}

		if (studentName !== undefined) {
			filters.name = { [Op.iLike]: `%${studentName}%` };
		}

		return await Students.findAll({
			where: filters,
		});
	}

	async findOne(id: string) {
		const data = await Students.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async getByStatus(status: string) {
		return await Students.findAll({ where: { status: status } });
	}

	async create(dto: IStudentInput) {
		const studenExists = await Students.findOne({
			where: { email: dto.email },
		});

		if (studenExists) {
			throw new ErrorBase("Student already exists", 400);
		}

		return await Students.create(dto);
	}

	async update({ dto, id }: { dto: IStudentInputUpdate; id: string }) {
		const data = await this.findOne(id);
		if (data) {
			return await Students.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			const orderItemActiveVinculateToSrudent = await OrderItems.findOne({
				where: { student_id: id, status: true },
			});

			console.log(orderItemActiveVinculateToSrudent);

			if (orderItemActiveVinculateToSrudent !== null) {
				throw new ErrorBase(
					"Cannot be delete because have order item active vinculate to this student",
					400
				);
			}
			return await Students.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default StudentsService;
