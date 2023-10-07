"use client";

import { useParams, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Loader2, LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { ProfileType } from "@/types";
import { currentProfile } from "@/lib/current-profile";
import { useUser } from "@/hooks/useUser";

export default function Home() {
	const params = useParams();
	const router = useRouter();
	const [profile, setProfile] = useState<ProfileType | null>(null);
	const user = useUser();

	useEffect(() => {
		if (profile === null) {
			setProfile(user.user);
		}
	}, []);

	return (
		<main className="min-h-full w-full">
			<div className="h-full w-full">
				<h2>Home</h2>
				<p>{profile?.role}</p>
				<Button
					onClick={() => {
						router.push(`/logout`);
						toast.success("Logged out");
					}}
					variant="destructive"
				>
					<LogOutIcon />
				</Button>
			</div>
		</main>
	);
}
