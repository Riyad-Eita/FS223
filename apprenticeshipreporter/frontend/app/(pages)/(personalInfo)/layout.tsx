"use client";

import { db } from "@/lib/db";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import ForbiddenPage from "@/components/errors/forbidden-page";
import { useUser } from "@/hooks/use-actions";
import { redirect } from "next/navigation";
import { UserProfileType } from "@/types";
import { cn } from "@/lib/utils";
import { session } from "@/lib/auth";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	enum SidebarPos {
		TOP = "top",
		LEFT = "left",
	}
	const sidebarPos: string = SidebarPos.LEFT;

	const { data: user, isLoading, isError } = useUser();

	if (isError) {
		return <ForbiddenPage />;
	}

	// If user is null then popup login modal and set user
	if ((user as UserProfileType)?.id === undefined) {
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
			<div
				className={cn(
					(sidebarPos === "left" && "h-full w-[72px] ") || "w-full h-[72px]",
					"hidden md:flex z-30 flex-col inset-y-0 fixed"
				)}
			>
				<NavigationSidebar profile={user} db={db} pos={sidebarPos} />
			</div>
			<div
				className={cn(
					(sidebarPos === "left" && "md:pl-[72px] ml-6") || "md:pt-[72px]",
					"h-full p-6"
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
