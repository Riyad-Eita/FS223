export enum Roles {
	"ADMIN",
	"MODERATOR",
	"GUEST",
}

export type ProfileType = {
	userId: string;
	userEmail?: string | null;
	userName?: string | null;
	userPassword?: string | null;
	userImage?: string | null;
	language?: string | null;
	role?: string | null;
};

export type ReportType = {
	id: string;
	userId?: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	week?: string;
	accomplishments?: string;
	plan?: string;
	problems?: string;
	comments?: string;
};

export type ToolType = {
	id: string;
	path: string;
	name: string;
	icon?: string;
};

export type DbType = {
	profiles?: ProfileType[];
	reports?: ReportType[];
	tools?: ToolType[];
};
