import { db } from "@/lib/db";
import authenticateUser from "./auth";
import { type } from "os";

const debug = (message: string) => {
	// console.log(`[DEBUG] ${message}`);
};

export const currentProfile = async ({ email }: { email: string }) => {
	debug("Starting currentProfile function");
	const isAuthenticated = await authenticateUser(email);

	if (!isAuthenticated) {
		debug("User not authenticated");
		return null;
	}

	const profile = {
		id: 1,
		email: "stevenmc59@gmail.com",
		firstname: "Steven",
		lastname: "McGough",
	};

	debug("Profile found");
	return profile;
};
