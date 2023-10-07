import { db } from "@/lib/db";
import { v4 as uuid4 } from "uuid";

export const currentProfile = async () => {
	// TODO Get user here

	// const { user } = auth();

	// Dummy auth function
	const { userId } = { userId: "ba63c212-3c13-4a9c-96e9-54a160e00dc7" };
	// const { userId } = { userId: null };

	if (!userId) {
		return null;
	}

	const profile = db.profiles.find((item) => {
		return item.userId === userId;
	});

	if (!profile) {
		return null;
	}

	return profile;
};
