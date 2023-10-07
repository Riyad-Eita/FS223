"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRedirectAfterSomeSeconds from "@/hooks/use-redirect-timer";

const LogoutPage = () => {
	const { secondsRemaining } = useRedirectAfterSomeSeconds("/", 5);
	const [loggedOut, setLoggedOut] = useState(false);

	useEffect(() => {
		if (!loggedOut) {
			logout();
			setLoggedOut(true);
		}
	}, [loggedOut]);

	const logout = () => {
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
		<div>
			<h2>Logout Page</h2>
		</div>
	);
};

export default LogoutPage;
