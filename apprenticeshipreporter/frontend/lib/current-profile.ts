import authenticateUser from "./auth";

export const currentProfile = async ({ email }: { email: string }) => {
	const isAuthenticated = await authenticateUser(email);

	if (!isAuthenticated) {
		return null;
	}

	const profile = {
		id: 1,
		email: "stevenmc59@gmail.com",
		firstname: "Steven",
		lastname: "McGough",
	};

	return profile;
};
