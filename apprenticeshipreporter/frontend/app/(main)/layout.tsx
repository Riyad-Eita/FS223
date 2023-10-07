"use client"

import { db } from "@/lib/db"
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<typeof db>();
	const [isLoading, setIsLoading] = useState(false);

	// Get user from api
	const checkUser = async () => {
		setIsLoading(true);
		const rep = await fetch("/api/auth");
		const res = await rep.json();
		setTimeout(() => {
			setUser(res);
			setIsLoading(false);
		}, 0);
	};

	useEffect(() => {
		checkUser();
	}, []);

	// If user is null then popup login modal and set user
	if (!user?.profile.userId) {
		return isLoading ? (
			<>
				<Loader2 className="h-4 w-4" />
			</>
		) : (
			<>Unauthorized</>
		);
	}

	return (
		<div className="min-h-screen">
			<div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
			<div className="md:pl-[72px] h-full">{children}</div>
		</div>
	);
};

export default MainLayout;
