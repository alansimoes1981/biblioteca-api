import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import Users from "../db/models/users";
import ErrorNotFound from "../errors/errorNotFound";
import ErrorBase from "../errors/errorBase";

const secret = process.env.SECRET_AUTH as string;

class AuthService {
	async login(dto: { email: string; password: string }) {
		const user = await Users.findOne({
			attributes: ["id", "email", "name", "password_hash"],
			where: {
				email: dto.email,
			},
		});

		if (!user) {
			throw new ErrorNotFound();
		}

		const passwordEquals = await compare(dto.password, user.password_hash);

		if (!passwordEquals) {
			throw new ErrorBase("Email or password incorretos");
		}

		const accessToken = sign(
			{ id: user.id, email: user.email, name: user.name },
			secret,
			{
				expiresIn: 86400,
			}
		);

		return { accessToken };
	}
}

export default AuthService;
