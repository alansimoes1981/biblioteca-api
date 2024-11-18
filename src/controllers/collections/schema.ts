import * as yup from "yup";

export const collectionSchema = yup.object().shape({
	title: yup.string().max(100).required("Title is required"),
	ISBN: yup.string().max(20).required("ISBN is required"),
	publish_year: yup.string().max(4).required("Publish year is required"),
	language: yup.string().max(20).required("Language is required"),
	publishing_company: yup
		.string()
		.max(100)
		.required("Publishing company is required"),
	quantity: yup.number().integer().required("Quantity is required"),
	cover_image: yup.string().required("Cover image is required"),
	status: yup.boolean().required("Status is required"),
	location: yup.string().max(100).required("Location is required"),
	page_number: yup.number().integer().required("Page number is required"),
	author: yup.string().max(100).required("Author is required"),
});

export const updateStatusCollectionSchema = yup.object().shape({
	status: yup.boolean().required("Status is required"),
});
