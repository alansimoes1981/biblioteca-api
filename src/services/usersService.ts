import { IUserInput, IUser, IUserInputUpdate } from "../types/IUsers";
import Users from "../db/models/users";
import ErrorNotFound from "../errors/errorNotFound";
import ErrorBase from "../errors/errorBase";

class UsersService {
	async getAll() {
		return await Users.findAll();
	}

	async findOne(id: string) {
		const data = await Users.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: IUserInput) {
		const userExists = await Users.findOne({
			where: { email: dto.email },
		});

		if (userExists) {
			throw new ErrorBase("User already exists", 400);
		}

		return await Users.create(dto);
	}

	async update({ dto, id }: { dto: IUserInputUpdate; id: string }) {
		const data = await this.findOne(id);
		if (data) {
			return await Users.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Users.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default UsersService;
