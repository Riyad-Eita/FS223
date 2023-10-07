import { db } from "@/lib/db";
import { v4 as uuid4 } from "uuid";

export const currentProfile = async () => {
	// TODO Get user here

	// const { user } = auth();

	// Dummy auth function
	const { userId } = { userId: uuid4() };

	if (!userId) {
		return null;
	}

	const profile = db?.profile;

	if (!profile) {
		return null;
	}

	return profile;
};
