import json from "@/db.json";
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

export const db = json || globalThis.mysql;

if (process.env.NODE_ENV !== "production") globalThis.mysql = [{ ...db }];
