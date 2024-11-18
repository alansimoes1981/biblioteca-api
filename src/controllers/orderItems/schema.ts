import * as yup from "yup";

export const orderItemSchema = yup.object().shape({
	collection_id: yup.string().max(100).required("CollectionId is required"),
	student_id: yup.string().max(100).required("StudentId is required"),
	status: yup.boolean().required("Status is required"),
	devolution_date: yup.date().required("Devolution date is required"),
});

export const updateStatusOrderItemSchema = yup.object().shape({
	status: yup.boolean().required("Status is required"),
});
