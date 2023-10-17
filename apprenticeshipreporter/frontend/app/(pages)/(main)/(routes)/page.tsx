import React from "react";
import UserInfo from "@/components/user/info";
import CustomCalendar from "@/components/calendar/custom-calendar";
import SignOutButton from "@/components/signoutButton/signout-button";

export default function Home() {
	// const reports = useReports();

	return (
		<main className="h-full w-full">
			<h1>Apprenticeship Reporter</h1>
			<div className="h-full w-full grid flex-col flex-wrap justify-strech items-strech md:grid-cols-2">
				<UserInfo />
				<div className="card rounded-lg bg-card box-shadow-md">
					<CustomCalendar />
				</div>
			</div>
		</main>
	);
}
