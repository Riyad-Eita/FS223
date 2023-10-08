"use client";

import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useModal } from "@/hooks/use-modal-store";

// import { ActionTooltip } from "@/components/action-tooltip";
// import { Button } from "@/components/ui/button";
// import { PenBox } from "lucide-react";

const SignUpPage = () => {
	const { onOpen } = useModal();

	useEffect(() => {
		onOpen("signup");
	}, [onOpen]);

	return (
		<>
			{/* <div className="h-screen w-screen flex flex-col justify-top items-start p-6">
			<h2>SignUp Page</h2>
			<ActionTooltip side="right" align="center" label="Sign Up">
				<Button className="h-16 w-16" onClick={signUp}><PenBox /></Button>
			</ActionTooltip>
		</div> */}
		</>
	);
};

export default SignUpPage;
