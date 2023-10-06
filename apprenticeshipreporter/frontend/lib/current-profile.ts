import { db } from "@/lib/db";

export const currentProfile = async () => {
	// TODO
	const { userId } = { userId: 1 }; //auth();

	if (!userId) {
		return null;
		throw new Error("You must be signed in to view the current profile.");
	}

	const profile = await db.profile;

	return profile;
};
