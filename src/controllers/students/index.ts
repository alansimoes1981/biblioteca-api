import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import StudentsService from "../../services/studentsService";
import { v4 } from "uuid";
import { IStudentInput, IStudentInputUpdate } from "types/IStudents";

const studentsService = new StudentsService();

class StudentsController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		const { studentName, status } = req.query;

		try {
			const allStudents = await studentsService.getAll({
				studentName: studentName as string,
				status: status as string,
			});
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allStudents));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const student = await studentsService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, student));
		} catch (error) {
			next(error);
		}
	}

	static async getByStatus(req: Request, res: Response, next: NextFunction) {
		const { status } = req.params;

		try {
			const studentsActives = await studentsService.getByStatus(status);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, studentsActives));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const id = v4();

			const body: IStudentInput = {
				id,
				name: req.body.name,
				school: req.body.school,
				class: req.body.class,
				brithday_date: req.body.brithday_date,
				email: req.body.email,
				status: req.body.status,
			};

			const studentCreated = await studentsService.create(body);

			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, studentCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		const dto: IStudentInputUpdate = {
			name: req.body.name,
			school: req.body.school,
			class: req.body.class,
			brithday_date: req.body.brithday_date,
			status: req.body.status,
		};

		try {
			await studentsService.update({ dto, id });

			const studentUpdated = await studentsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, studentUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await studentsService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default StudentsController;
