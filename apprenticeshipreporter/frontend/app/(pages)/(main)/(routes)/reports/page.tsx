"use client";

import { useReports, useUser } from "@/hooks/use-actions";
import { ReportType, UserProfileType } from "@/types";

import { columns } from "./colums";
import { DataTable } from "./data-table";

const ReportsOverviewPage = () => {
	const useReportsHook = useReports();
	const useUserHook = useUser({cookie: "token"});

	const data = useReportsHook?.data?.filter(
		(report: ReportType) =>  Number(report?.userId) === Number(useUserHook.data?.id)
	);

	return (
		<>
			<h2>Reports</h2>
			<div className="text-center font-medium">
				<DataTable columns={columns} data={data || []} />
			</div>
		</>
	);
};

export default ReportsOverviewPage;
