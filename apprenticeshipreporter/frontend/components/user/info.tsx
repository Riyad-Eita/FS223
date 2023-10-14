"use client"

import { useUser, useReports } from "@/hooks/use-actions";

const UserInfo = () => {
	const user = useUser({ cookie: "" });

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
			{userHTMLData(user?.data)}
		</div>
	);
};

export default UserInfo;
