export interface IOrderItem {
	id: string;
	collection_id: string;
	student_id: string;
	status: boolean;
	devolution_date: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface IResponseOrderItemGetALl {
	id: string;
	devolution_date: string;
	status: boolean;
	createdAt: string;
	updatedAt: string;
	Collection: {
		id: string;
		title: string;
	};
	Student: {
		id: string;
		name: string;
		class: string;
	};
}

export type IOrderItemInput = Omit<IOrderItem, "createdAt" | "updatedAt">;

export type IOrderItemInputUpdate = Omit<
	IOrderItem,
	"id" | "createdAt" | "updatedAt"
>;

export interface IOrderItemOutput extends Required<IOrderItem> {}
