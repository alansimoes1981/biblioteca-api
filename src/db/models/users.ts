import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { IUser, IUserInput } from "../../types/IUsers";

class Users extends Model<IUser, IUserInput> implements IUser {
	public id!: string;
	public name!: string;
	public school!: string;
	public email!: string;
	public telephone!: string;
	public password_hash!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Users.init(
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		school: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		telephone: {
			allowNull: false,
			type: DataTypes.STRING(14),
		},
		password_hash: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
		},
	},
	{
		timestamps: true,
		sequelize: connection,
		modelName: "Users", // Nome do modelo
		underscored: false, // Propriedades em camelCase
	}
);

export default Users;
