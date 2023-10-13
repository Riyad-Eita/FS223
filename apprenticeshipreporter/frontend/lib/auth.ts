import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { UserProfileType } from "@/types";

type LoginProps = {
	firstname?: string;
	lastname?: string;
	email?: string;
	password?: string;
};

export const session = (jwtoken?: string) => {
	if (jwtoken === "token") return true;

	return false;
};

export const signin = async ({ email, password }: LoginProps) => {
	const response = await axios
		.post("http://localhost:8080/api/auth/signin", {
			email,
			password,
		})
		.catch((e) => {
			console.error(e);
			return e;
		});

	if (response instanceof AxiosError) {
		return response.response?.data;
	}

	if (!response.data.user) throw new Error("[AUTH]: No user in response");

	const user = response.data.user;

	if (response.data.accessToken) {
		document.cookie = `apprenticeshipreporter:${user.email}=${response.data.accessToken}=${response.data.accessToken}`;
	}

	return response.data;
};

export const signup = async ({
	firstname,
	lastname,
	email,
	password,
}: LoginProps) => {
	try {
		const response = await axios.post("http://localhost:8080/api/auth/signup", {
			firstname,
			lastname,
			email,
			password,
		});
		return response;
	} catch (e) {
		console.error(e);
		return e;
	}
};

export const authenticateUser = async ({}) => {
	try {
		return true;
	} catch (error) {
		console.error("Error authenticating user:", error);
	}
};

export default authenticateUser;
