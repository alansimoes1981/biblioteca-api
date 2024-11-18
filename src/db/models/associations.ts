import Students from "./students";
import Collection from "./collection";
import OrderItem from "./orderItem";

export const associations = () => {
	Students.hasOne(OrderItem, {
		foreignKey: "id",
	});

	Collection.hasOne(OrderItem, {
		foreignKey: "id",
	});

	OrderItem.belongsTo(Collection, {
		foreignKey: "collection_id",
	});
	OrderItem.belongsTo(Students, {
		foreignKey: "student_id",
	});
};
