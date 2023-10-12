import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { UserProfileType } from "@/types";
import { db } from "./db";

const GUEST_USER: UserProfileType = {
	userId: uuidv4(),
};

type LoginProps = {
	firstname?: string;
	lastname?: string;
	email?: string;
	password?: string;
};

export const signin = async ({ email, password }: LoginProps) => {
	try {
		const response = await axios.post("http://localhost:8080/api/auth/signin", { email, password });
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export const signup = async ({
	firstname,
	lastname,
	email,
	password
}: LoginProps) => {
	try {
		await axios.post("http://localhost:8080/api/auth/signup", {firstname, lastname, email, password });
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
