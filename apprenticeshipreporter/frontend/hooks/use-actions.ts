import useSWR from "swr";

export const useUser = () => {
	const { data, isLoading, error } = {
		data: {
			id: 1,
			email: "stevenmc59@gmail.com",
			firstname: "Steven",
			lastname: "McGough",
		},
		isLoading: false,
		error: null,
	}
	
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
