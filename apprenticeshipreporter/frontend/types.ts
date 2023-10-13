// Enum for user roles
export enum UserRole {
	ADMIN = "ADMIN",
	MODERATOR = "MODERATOR",
	GUEST = "GUEST",
}

// User profile type
export type UserProfileType = {
	id?: number;
	email?: string | null;
	firstname?: string | null;
	lastname?: string | null;
	password?: string | null;
	userImage?: string | null;
	language?: string | null;
	role?: string | null; // Use the UserRole enum for role
} | null;

// Report type
export type ReportType = {
	id?: number;
	key?: string;
	userId?: string | null; // Nullable to allow for anonymous reports
	createdAt?: string;
	updatedAt?: string | null;
	deletedAt?: string | null;
	week?: string;
	status?: string | null;
	accomplishments?: string | null;
	plan?: string | null;
	problems?: string | null;
	comments?: string | null;
} | null;

// Tool type
export type ToolType = {
	id?: string;
	path?: string;
	name?: string;
	icon?: string | null;
};

// Database type
export type DatabaseType = {
	profiles?: UserProfileType[];
	reports?: ReportType[];
	tools?: ToolType[];
} | null;
