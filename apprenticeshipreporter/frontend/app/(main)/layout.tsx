"use client";

import { db } from "@/lib/db";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import ForbiddenPage from "@/components/errors/forbidden-page";
import { useUser } from "@/hooks/useUser";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { user, isLoading, isError } = useUser();

	if (isError) {
		return <ForbiddenPage />;
	}

	// If user is null then popup login modal and set user
	if (user?.profile?.userId === undefined) {
		return (
			<div className="h-screen w-screen flex flex-col justify-center items-center">
				{(isLoading && (
					<Loader2 className="animate-spin h-16 w-16 opacity-70" />
				)) || <></>}
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
				<NavigationSidebar />
			</div>
			<div className="md:pl-[72px] h-full ml-6 p-6">{children}</div>
		</div>
	);
};

export default MainLayout;
