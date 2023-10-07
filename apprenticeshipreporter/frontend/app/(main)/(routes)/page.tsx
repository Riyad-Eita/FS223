"use client";

import { useParams, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Loader2, LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { ProfileType } from "@/types";
import { currentProfile } from "@/lib/current-profile";
import { useUser } from "@/hooks/useUser";
import React from "react";

export default function Home() {
	const params = useParams();
	const router = useRouter();
	const [profile, setProfile] = useState<ProfileType | null>(null);
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const user = useUser();

	useEffect(() => {
		if (profile === null) {
			setProfile(user.user);
		}
	}, [profile, user.user]);

	return (
		<main className="min-h-full w-full">
			<div className="h-full w-full flex flex-col">
				<h1>Apprenticeship Reporter</h1>
				<h2>User</h2>
				<p>{profile?.userName?.toString().toLocaleLowerCase()}</p>
				<p>{profile?.userEmail?.toString().toLocaleLowerCase()}</p>
				<p>{profile?.role?.toString().toLocaleLowerCase()}</p>

				<h2>Calendar</h2>
				<div className="w-fit  pt-6 pb-6">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</div>
				<h2>Reports</h2>
				<p>Coming soon...</p>

				<h2>Profiles</h2>
				<p>Coming soon...</p>

				<div className="w-fit  pt-6 pb-6">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</div>

				<div className="w-fit  pt-6 pb-6">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</div>
				<div className="w-fit  pt-6 pb-6">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</div>
				<div className="w-fit  pt-6 pb-6">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</div>

				<Button
					onClick={() => {
						router.push(`/logout`);
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
