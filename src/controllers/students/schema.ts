import * as yup from "yup";

export const studentSchema = yup.object().shape({
	name: yup.string().required(),
	school: yup.string().required(),
	class: yup.string().required(),
	brithday_date: yup.string().required(),
	email: yup.string().required(),
	status: yup.boolean().required(),
});

export const updatedStudentSchema = yup.object().shape({
	name: yup.string().required(),
	school: yup.string().required(),
	class: yup.string().required(),
	brithday_date: yup.string().required(),
	status: yup.boolean().required(),
});
