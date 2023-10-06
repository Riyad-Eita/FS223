"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		checkUser();
	}, []);

	// Get user from api
	const checkUser = async () => {
		setIsLoading(true);
		await fetch("/api/auth")
			.then((res) => res.json())
			.then((res) => {
				setUser(res);
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			});
	};

	// If user is null then popup login modal and set user
	if (user === null) {
		return isLoading ? (
			<>
				<Loader2 className="h-4 w-4" />
			</>
		) : (
			<>Unauthorized</>
		);
	}

	// If user is not null then render page
	return (
		<main className="min-h-screen w-screen">
			<div id="container" className="h-full w-full">
				<ModeToggle />
				Home
			</div>
		</main>
	);
}
