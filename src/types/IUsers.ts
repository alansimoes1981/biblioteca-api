export interface IUser {
	id: string;
	name: string;
	school: string;
	email: string;
	telephone: string;
	password_hash: string;
	createdAt: Date;
	updatedAt: Date;
}

export type IUserInput = Omit<IUser, "createdAt" | "updatedAt">;
export type IUserInputUpdate = Omit<
	IUser,
	"id" | "createdAt" | "updatedAt" | "password_hash" | "email"
>;

export interface IUserOutput extends Required<IUser> {}
