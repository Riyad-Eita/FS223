import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { UserProfileType } from "@/types";
import { db } from "./db";

const GUEST_USER: UserProfileType = {
	userId: uuidv4(),
};

type LoginProps = {
	name?: string;
	pass?: string;
};

export const signin = async ({ name, pass }: LoginProps) => {
	try {
		const response = await axios.post("/api/auth/signin", { name, pass });
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const signup = async ({
	name,
	mail,
	pass,
}: LoginProps & { mail: string }) => {
	try {
		await axios.post("/api/auth/signup", { name, mail, pass });
	} catch (e) {
		console.error(e);
	}
};

export const authenticateUser = async () => {
	try {
		const userParams = { name: "Administrator", pass: "admin" };

		const uid = db.profiles.find((profile) => {
			if (
				(profile.userName === userParams.name ||
					profile.userEmail === userParams.name) &&
				profile.userPassword === userParams.pass
			)
				return profile;
			return null;
		})?.userId;

		return uid;
	} catch (error) {
		console.error("Error authenticating user:", error);
	}

	return GUEST_USER.userId;
};

export default authenticateUser;