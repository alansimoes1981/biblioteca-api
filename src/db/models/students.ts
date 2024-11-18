import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { IStudent, IStudentInput } from "../../types/IStudents";

class Students extends Model<IStudent, IStudentInput> implements IStudent {
	public id!: string;
	public name!: string;
	public school!: string;
	public class!: string;
	public email!: string;
	public brithday_date!: Date;
	public status!: boolean;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Students.init(
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
		class: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		brithday_date: {
			allowNull: false,
			type: DataTypes.DATE,
		},
		status: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
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
		modelName: "Students", // Nome do modelo
		underscored: false, // Propriedades em camelCase
	}
);

export default Students;
