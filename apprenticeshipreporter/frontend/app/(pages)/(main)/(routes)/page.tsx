import React from "react";
import UserInfo from "@/components/user/info";
import CustomCalendar from "@/components/calendar/custom-calendar";
import SignOutButton from "@/components/signoutButton/signout-button";

export default function Home() {
	// const reports = useReports();

	return (
		<main className="h-full w-full">
			<h1>Apprenticeship Reporter</h1>
			<div className="h-full w-full grid flex-col flex-wrap md:grid-cols-2">
				<UserInfo />

				<CustomCalendar />

				<div className="p-4">
					<h2>Profiles</h2>
					<p>Coming soon...</p>
				</div>

				<SignOutButton />
			</div>
		</main>
	);
}
