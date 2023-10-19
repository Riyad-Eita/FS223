import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { UserProfileType } from "@/types";

axios.defaults.baseURL = process.env.AXIOS_BASEURL;
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common.authorization = `Bearer ${token}`;

type LoginProps = {
	firstname?: string;
	lastname?: string;
	email: string;
	password: string;
};

export const session = (jwtoken?: string) => {
	if (jwtoken === "token") return true;

	return false;
};

export const signin = async ({ email, password }: LoginProps) => {
	const token = "";
	const response = await axios
		.post(
			"/backend/api/auth/signin",
			{
				email,
				password,
			},
			{
				headers: {
					crossorigin: "true",
					mode: "no-cors",
				},
			}
		)
		.catch((e) => {
			console.error(e);
			return e;
		});

	console.log(response);

	if (response instanceof AxiosError) {
		return response.response?.data;
	}

	if (!response.data.user) throw new Error("[AUTH]: No user in response");

	const user = response.data.user;

	if (response.data.accessToken) {
		// document.cookie = `apprenticeshipreporter:${user.email}=${response.data.accessToken}=${response.data.accessToken}`;
		document.cookie = `apprenticeshipreporter=${response.data.accessToken}=${response.data.accessToken}`;
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
		const response = await axios.post("/backend/api/auth/signup", {
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
