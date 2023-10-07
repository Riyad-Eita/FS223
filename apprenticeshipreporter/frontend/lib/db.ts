import { v4 as uuid4 } from "uuid";

declare global {
	var mysql:
		| {
				profile?: {
					userId: string;
					userEmail?: string | null; // TODO: remove this?
					userName?: string | null; // TODO: remove this?
					userImage?: string | null; // TODO: remove this?
					language?: string | null;
				};
				reports?: {
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
				}[];
				tools?: {
					id: string;
					path: string;
					name: string;
					icon?: string;
				}[];
		  }
		| undefined;
}

export const db = {
	profile: {
		userId:  uuid4(),
		userEmail: "userEmail",
		userName: "userName",
		userImage: "userImage",
		language: "de",
	},
	reports: [
		{
			id: "KW35",
			createdAt: "2021-01-01",
			updatedAt: "2021-01-01",
			deletedAt: "2021-01-01",
			week: "KW35",
			accomplishments: "accomplishments",
			plan: "plan",
			problems: "problems",
			comments: "comments",
		},
		{
			id: "KW36",
			createdAt: "2021-01-01",
			updatedAt: "2021-01-01",
			deletedAt: "2021-01-01",
			week: "KW36",
			accomplishments: "accomplishments",
			plan: "plan",
			problems: "problems",
			comments: "comments",
		},
		{
			id: "KW37",
			createdAt: "2021-01-01",
			updatedAt: "2021-01-01",
			deletedAt: "2021-01-01",
			week: "KW37",
			accomplishments: "accomplishments",
			plan: "plan",
			problems: "problems",
			comments: "comments",
		},
	],
	tools: [
		{ id: "1", name: "Home", path: "", icon: "Home" },
		{ id: "2", name: "Report Overview", path: "reports", icon: "Dashboard" },
		{ id: "3", name: "PDF Generator", path: "pdf-gen", icon: "File" },
	],
} ||  globalThis.mysql  ;

if (process.env.NODE_ENV !== "production") globalThis.mysql = db;
