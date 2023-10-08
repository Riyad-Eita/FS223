"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRedirectAfterSomeSeconds from "@/hooks/use-redirect-timer";
import { LucideHeartHandshake } from "lucide-react";

const LogoutPage = () => {
	const { secondsRemaining } = useRedirectAfterSomeSeconds("/", 30);

	useEffect(() => {
		logoutToast();
	}, []);

	const logoutToast = () => {
		toast.success("Logged out successfully", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<>
			<LucideHeartHandshake className="h-24 w-24" />
			<h2 className="m-4 text-opacity-80">Goodbye</h2>
			<p className="text-muted-foreground">Redirect in {secondsRemaining} seconds</p>
		</>
	);
};

export default LogoutPage;
