import { db } from "@/lib/db";
import authenticateUser from "./auth";
import { type } from "os";

const debug = (message: string) => {
	// console.log(`[DEBUG] ${message}`);
};

export const currentProfile = async () => {
	debug("Starting currentProfile function");
	const userId = await authenticateUser();

	if (!userId) {
		debug("User not authenticated");
		return null;
	}

	debug(userId);

	const profile = db.profiles.find((item) => {
		debug(item.userId);
		return item.userId === userId;
	});

	if (!profile) {
		debug("Profile not found");
		return null;
	}

	debug("Profile found");
	return profile;
};
