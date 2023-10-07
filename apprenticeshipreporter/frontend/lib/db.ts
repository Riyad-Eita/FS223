import { type } from "os";
import { v4 as uuid4 } from "uuid";

import json from "@/db.json";
import { ProfileType, ToolType, ReportType } from "@/types";

declare global {
	var mysql:
		| {
				profiles?: ProfileType[];
				reports?: ReportType[];
				tools?: ToolType[];
		  }[]
		| undefined;
}

export const db = json || globalThis.mysql;

if (process.env.NODE_ENV !== "production") globalThis.mysql = [{ ...db }];
