"use client";

import { useUser, useReports } from "@/hooks/use-actions";
import { useEffect, useState } from "react";

const UserInfo = () => {
	const [docCookie, setdocCookie] = useState("");

	const { data: user, isLoading, isError } = useUser({ cookie: docCookie });

	useEffect(() => {
		setdocCookie(document.cookie);
	}, [docCookie]);

	if (!docCookie) return;

	const userHTMLData = (obj: any) => {
		if (!obj) return null;
		return Object.entries(obj)?.map((element: any, key: number) => (
			<div key={key} className="flex">
				<p className="w-36">{element[0].toString().toLocaleUpperCase()}</p>
				<p className=" mr-2">|</p>
				<p className="">{element[1]}</p>
			</div>
		));
	};

	return (
		<div className="p-4">
			<h2>User</h2>
			{userHTMLData(user)}
		</div>
	);
};

export default UserInfo;
