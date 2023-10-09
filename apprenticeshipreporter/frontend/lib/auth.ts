import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { UserProfileType } from "@/types";

const GUEST_USER: UserProfileType = {
	userId: uuidv4(),
};

type LoginProps = {
	name: string;
	pass: string;
};

export const login = async ({ name, pass }: LoginProps) => {
	const response = await axios.post("/api/auth/signin", { name, pass });
	return response.data;
};

export const authenticateUser = async () => {
	try {
		const uid = await login({ name: "User", pass: "user" });

		return uid;
	} catch (error) {
		console.error("Error authenticating user:", error);
	}

	return GUEST_USER;
};

export default authenticateUser;
