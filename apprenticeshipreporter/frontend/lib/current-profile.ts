import { db } from "@/lib/db";
import { v4 as uuid4 } from "uuid";

export const currentProfile = async () => {
	// TODO Get user here

	// const { user } = auth();

	// Dummy auth function
	// const { userId } = { userId: "95ae534a-cfab-4eb2-a41f-f7289a63af78" };
	const { userId } = { userId: null };

	if (!userId) {
		return null;
	}

	const profile = db.profiles.find((item) => {
		return item.userId === userId ? item : null;
	});

	if (!profile) {
		return null;
	}

	return profile;
};
