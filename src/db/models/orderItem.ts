import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { IOrderItem, IOrderItemInput } from "../../types/IOrderItems";

class OrderItems
	extends Model<IOrderItem, IOrderItemInput>
	implements IOrderItem
{
	public id!: string;
	public collection_id!: string;
	public student_id!: string;
	public status!: boolean;
	public devolution_date!: Date;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

OrderItems.init(
	{
		id: {
			allowNull: false,
			type: DataTypes.UUID,
			primaryKey: true,
		},
		collection_id: {
			allowNull: false,
			type: DataTypes.UUID,
			references: {
				model: "Collections",
				key: "id",
			},
			onDelete: "CASCADE",
		},
		student_id: {
			allowNull: false,
			type: DataTypes.UUID,
			references: {
				model: "Students",
				key: "id",
			},
			onDelete: "CASCADE",
		},
		status: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
		},
		devolution_date: {
			allowNull: false,
			type: DataTypes.DATE,
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
		underscored: false,
		modelName: "OrderItems",
	}
);

export default OrderItems;
