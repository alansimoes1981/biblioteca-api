import * as yup from "yup";

export const userSchema = yup.object().shape({
	name: yup.string().required(),
	school: yup.string().required(),
	email: yup.string().required(),
	telephone: yup.string().required(),
	password: yup.string().required(),
});

export const updatedUserSchema = yup.object().shape({
	name: yup.string().required(),
	school: yup.string().required(),
	telephone: yup.string().required(),
});
