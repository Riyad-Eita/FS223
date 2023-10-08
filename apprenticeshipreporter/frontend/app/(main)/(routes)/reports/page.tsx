"use client";

import { useReports } from "@/hooks/use-actions";
import { ReportType } from "@/types";

import { columns } from "./colums";
import { DataTable } from "./data-table";

const ReportsOverviewPage = () => {
	const reports = useReports();
	return (
		<>
			<h2>Reports</h2>
			<div className="container mx-auto py-10 text-center font-medium">
				<DataTable columns={columns} data={reports.data || []} />
			</div>
		</>
	);
};

export default ReportsOverviewPage;
