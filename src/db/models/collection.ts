import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { ICollection, ICollectionInput } from "../../types/ICollections";

class Collections
	extends Model<ICollection, ICollectionInput>
	implements ICollection
{
	public id!: string;
	public title!: string;
	public ISBN!: string;
	public publish_year!: string;
	public language!: string;
	public publishing_company!: string;
	public quantity!: number;
	public cover_image!: string;
	public status!: boolean;
	public location!: string;
	public page_number!: number;
	public author!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Collections.init(
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
		},
		title: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		ISBN: {
			allowNull: false,
			type: DataTypes.STRING(20),
		},
		publish_year: {
			allowNull: false,
			type: DataTypes.STRING(4),
		},
		language: {
			allowNull: false,
			type: DataTypes.STRING(20),
		},
		publishing_company: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		quantity: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		cover_image: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		status: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
		},
		location: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		page_number: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		author: {
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
		underscored: false,
		modelName: "Collections",
	}
);

export default Collections;
