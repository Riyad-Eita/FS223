import axios, { AxiosError } from "axios";
import useSWR from "swr";

axios.defaults.baseURL = process.env.AXIOS_BASEURL;

export const useUser = ({ cookie }: { cookie: string }) => {
	axios.defaults.headers.common = {
		// Authorization: `bearer ${cookie.split("=")[1]}`,
	};
	const { data, isLoading, error } = useSWR("user", async () => {
		const response = await axios
			.post("/backend/api/auth/getUser", {
				cookie: cookie,
				timeout: 2000,
				headers: {
					Authorization: `Bearer: ${cookie}`,
					Accept: "application/json",
				},
			})
			.catch((e) => {
				console.error(e);
				return e;
			});

		if (!response.data) {
			return {
				id: 1,
				email: "email",
				firstname: "first",
				lastname: "last",
			};
		}

		console.log(response.data);
		return response.data;
	});

	return { data, isLoading, isError: error };
};

export const useReports = () => {
	const { data, isLoading, error } = useSWR("reports", async () => {
		const response = await fetch("/api/reports");
		const data = await response.json();
		return data.reports;
	});
	return { data, isLoading, isError: error };
};

export const useProfiles = () => {
	const { data, isLoading, error } = useSWR("profiles", async () => {
		const response = await fetch("/api/profiles");
		const data = await response.json();
		return data.profiles;
	});
	return { data, isLoading, isError: error };
};

const actions = { useUser, useReports, useProfiles };

export default actions;
