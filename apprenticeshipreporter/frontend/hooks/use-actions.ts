import axios, { AxiosError } from "axios";
import useSWR from "swr";

export const useUser = ({ cookie }: { cookie: string }) => {
	const { data, isLoading, error } = useSWR("user", async () => {
		const response = await axios
			.post("http://fs223.de:8080/api/auth", {
				cookie,
			})
			.catch((e) => {
				console.error(e);
				return e;
			});

		return response;
	});

	const res = {
		id: 1,
		email: "username@gmail.com",
		firstname: "Steven",
		lastname: "McGough",
	};

	// const { data, isLoading, error } = {
	// 	data: {
	// 		id: 1,
	// 		email: "stevenmc59@gmail.com",
	// 		firstname: "Steven",
	// 		lastname: "McGough",
	// 	},
	// 	isLoading: false,
	// 	error: null,

	return { data: res, isLoading, isError: error };
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
