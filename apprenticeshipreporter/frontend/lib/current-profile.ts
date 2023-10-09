import { db } from "@/lib/db";
import authenticateUser from "./auth";
import { type } from "os";


export const currentProfile = async () => {
	const userId = await authenticateUser();

	console.log(userId)

	if (!userId) {
		return null;
	}

	const profile = await db.profiles.find((item) => {
		return item.userId === userId;
	});

	if (!profile) {
		return null;
	}

	return profile;
};
