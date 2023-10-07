import { type } from "os";
import { v4 as uuid4 } from "uuid";

import json from "@/db.json";
import { Profile, Tool, Report } from "@/types";

declare global {
	var mysql:
		| {
				profiles?: Profile[];
				reports?: Report[];
				tools?: Tool[];
		  }[]
		| undefined;
}

export const db = json || globalThis.mysql;

if (process.env.NODE_ENV !== "production") globalThis.mysql = [{ ...db }];
