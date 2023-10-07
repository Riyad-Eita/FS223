"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActionTooltip } from "@/components/action-tooltip";
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

const LoginPage = () => {
	const { onOpen } = useModal();
	const params = useParams();
	const router = useRouter();
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (loggedIn) {
			router.push(`/`);
		} else {
			login();
		}
	}, [loggedIn, router]);

	const login = () => {
		onOpen("login");
	};

	return (
		<div className="h-screen w-screen flex flex-col justify-top items-start p-6">
			<ActionTooltip side="right" align="center" label="Login">
				<Button className="h-16 w-16" onClick={login}>
					<PenBox />
				</Button>
			</ActionTooltip>
		</div>
	);
};

export default LoginPage;
