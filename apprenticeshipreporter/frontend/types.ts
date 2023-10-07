export type Profile = {
	userId: string;
	userEmail?: string | null;
	userName?: string | null;
	userPassword?: string | null;
	userImage?: string | null;
	language?: string | null;
};

export type Report = {
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

export type Tool = {
	id: string;
	path: string;
	name: string;
	icon?: string;
};
