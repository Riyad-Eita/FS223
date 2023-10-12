"use client";

import { useParams, useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { UserProfileType, ReportType } from "@/types";
import { useUser, useReports } from "@/hooks/use-actions";
import React from "react";

export default function Home() {
	const params = useParams();
	const router = useRouter();
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	// const user = useUser();
	// const reports = useReports();

	const userHTMLData = (obj: any) => {
		if (!obj) return null;
		return Object.entries(obj)?.map((element: any, key: number) => (
			<div key={key} className="flex">
				<p className="w-36">{element[0].toString().toLocaleUpperCase()}</p>
				<p className=" mr-2">|</p>
				<p className="">{element[1]}</p>
			</div>
		));
	};

	return (
		<main className="h-full w-full">
			<h1>Apprenticeship Reporter</h1>
			<div className="h-full w-full grid flex-col flex-wrap md:grid-cols-2">
				{/* <div className="p-4">
					<h2>User</h2>
					{userHTMLData(user?.data)}
				</div> */}

				<div className="p-4">
					<h2>Calendar</h2>
					<div className="w-fit pt-6 pb-6">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							className="rounded-md border"
						/>
					</div>
				</div>

				{/* <div className="p-4 truncate ...">
					<ReportsOverview reports={reports?.data} />
				</div> */}

				{/* 	<div className="p-4">
					<h2>Profiles</h2>
					<p>Coming soon...</p>
				</div> */}

				<Button
					onClick={() => {
						router.push(`/signout`);
						toast.success("Logged out");
					}}
					className="fixed top-4 right-4"
					variant="outline"
				>
					<LogOutIcon />
				</Button>
			</div>
		</main>
	);
}
