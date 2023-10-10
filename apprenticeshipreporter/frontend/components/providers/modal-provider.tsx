"use client";

import { useEffect, useState } from "react";
import { SignUpModal } from "@/components/modals/signup-modal";
import { SignInModal } from "@/components/modals/signin-modal";

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div>
			<SignUpModal />
			<SignInModal />
		</div>
	);
};
