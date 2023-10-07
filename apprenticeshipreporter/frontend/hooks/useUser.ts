import { ProfileType } from "@/types";
import useSWR from "swr";

const fetcher = async () => {
	const response = await fetch("/api/auth");
	const data = await response.json();
	return data;
};

export const useUser = () => {
	const { data, isLoading, error } = useSWR("auth", fetcher);
	return { user: data, isLoading, isError: error };
};
