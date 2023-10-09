"use client";

import { useReports, useUser } from "@/hooks/use-actions";
import { ReportType, UserProfileType } from "@/types";

import { columns } from "./colums";
import { DataTable } from "./data-table";

const ReportsOverviewPage = () => {
	const useReportsHook = useReports();
	const useUserHook = useUser();

	const data = useReportsHook?.data?.filter(
		(report: ReportType) => report?.userId === useUserHook.data?.userId
	);
	return (
		<>
			<h2>Reports</h2>
			<div className="container mx-auto py-10 text-center font-medium">
				<DataTable columns={columns} data={data || []} />
			</div>
		</>
	);
};

export default ReportsOverviewPage;
