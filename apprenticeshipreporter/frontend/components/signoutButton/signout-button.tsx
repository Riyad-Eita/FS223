"use client";

import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";

const SignOutButton = () => {
	const handleRedirect = () => {
		redirect("/signout");
	};

	return (
		<Button
			onClick={handleRedirect}
			// onClick={() => {
			// 	toast.success("Logged out");
			// }}
			className="fixed top-4 right-4"
			variant="outline"
		>
			<LogOutIcon />
		</Button>
	);
};

export default SignOutButton;
