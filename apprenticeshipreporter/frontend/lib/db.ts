import { UserProfileType, ToolType, ReportType } from "@/types";

declare global {
	var mysql:
		| {
				profiles?: UserProfileType[];
				reports?: ReportType[];
				tools?: ToolType[];
		  }[]
		| undefined;
}

globalThis.mysql;

if (process.env.NODE_ENV !== "production") globalThis.mysql = [];
