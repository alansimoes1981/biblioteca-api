import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import UsersService from "../../services/usersService";
import { v4 } from "uuid";
import { hash } from "bcryptjs";
import { IUserInput, IUserInputUpdate } from "types/IUsers";

const usersService = new UsersService();

class UsersController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allUsers = await usersService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(201, null, null, allUsers));
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const user = await usersService.findOne(id);
			return res.status(200).send(Helper.ResponseData(200, null, null, user));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const id = v4();
			const passwordHash = await hash(req.body.password, 8);

			const body: IUserInput = {
				id,
				name: req.body.name,
				school: req.body.school,
				email: req.body.email,
				telephone: req.body.telephone,
				password_hash: passwordHash,
			};

			const userCreated = await usersService.create(body);

			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, userCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		const dto: IUserInputUpdate = {
			name: req.body.name,
			school: req.body.school,
			telephone: req.body.telephone,
		};

		try {
			await usersService.update({ dto, id });

			const userUpdated = await usersService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, userUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await usersService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default UsersController;
