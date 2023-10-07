"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "@/components/action-tooltip";
import { PenBox } from "lucide-react";

const SignUpPage = () => {
	const { onOpen } = useModal();
	const params = useParams();
	const router = useRouter();
	const [signedUp, setsignedUp] = useState(false);

	useEffect(() => {
		if (signedUp) {
			setsignedUp(true);
			router.push(`/login`);
		} else {
			signUp();
		}
	}, [signedUp, router]);

	const signUp = () => {
		onOpen("signup");
	};

	return (
		<div className="h-screen w-screen flex flex-col justify-top items-start p-6">
			{/* <h2>SignUp Page</h2> */}
			<ActionTooltip side="right" align="center" label="Sign Up">
				<Button className="h-16 w-16" onClick={signUp}><PenBox /></Button>
			</ActionTooltip>
		</div>
	);
};

export default SignUpPage;
