"use client"

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (!loggedIn) {
			login();
		}
	}, [loggedIn]);

	const login = () => {
		toast.success("Logged in successfully", {
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
			<h2>Login Page</h2>
			<ToastContainer />
		</div>
	);
};

export default LoginPage;
