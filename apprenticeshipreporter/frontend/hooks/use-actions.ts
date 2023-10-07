import { ReportType, UserProfileType } from "@/types";
import useSWR from "swr";

export const useUser = () => {
	const { data, isLoading, error } = useSWR("auth", async () => {
		const response = await fetch("/api/auth");
		const data = await response.json();
		return data;
	});
	return { data, isLoading, isError: error };
};

export const useReports = () => {
	const {
		data,
		isLoading,
		error,
	}: { data: ReportType[]; isLoading: boolean; error: any } = useSWR(
		"reports",
		async () => {
			const response = await fetch("/api/reports");
			const data = await response.json();
			return data.reports;
		}
	);
	return { data, isLoading, isError: error };
};

export const useProfiles = () => {
	const {
		data,
		isLoading,
		error,
	}: { data: UserProfileType[]; isLoading: boolean; error: any } = useSWR(
		"profiles",
		async () => {
			const response = await fetch("/api/profiles");
			const data = await response.json();
			return data.profiles;
		}
	);
	return { data, isLoading, isError: error };
};

const actions = { useUser, useReports, useProfiles };

export default actions;
