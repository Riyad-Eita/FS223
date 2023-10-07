import { type } from "os";
import { report } from "process";
import { v4 as uuid4 } from "uuid";

import json from "@/db.json";

type profile = {
	userId: string;
	userEmail?: string | null; // TODO: remove this?
	userName?: string | null; // TODO: remove this?
	userPassword?: string | null;
	userImage?: string | null; // TODO: remove this?
	language?: string | null;
};

type report = {
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

type tool = {
	id: string;
	path: string;
	name: string;
	icon?: string;
};

declare global {
	var mysql:
		| {
				profiles?: profile[];
				reports?: report[];
				tools?: tool[];
		  }[]
		| undefined;
}

export const db = json || globalThis.mysql;

if (process.env.NODE_ENV !== "production") globalThis.mysql = [{ ...db }];
