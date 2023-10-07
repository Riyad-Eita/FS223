"use client";

import { useParams, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Loader2, LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
	const params = useParams();
	const router = useRouter();

	return (
		<main className="min-h-full w-full">
			<div className="h-full w-full">
				<h2>Home</h2>
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
