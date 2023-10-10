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

	useEffect(() => {
		onOpen("login");
	}, [onOpen]);

	return (
		<>
			{/* <div className="h-screen w-screen flex flex-col justify-top items-start p-6">
			<ActionTooltip side="right" align="center" label="Login">
				<Button className="hidden h-16 w-16">
					<PenBox />
				</Button>
			</ActionTooltip>
		</div> */}
		</>
	);
};

export default LoginPage;
