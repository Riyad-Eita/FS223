import { ReportType } from "@/types";

const ReportsOverview = ({ reports }: { reports: ReportType[] }) => {
	if (!reports || !reports.length) return;
	return (
		<>
			<h2>Reports</h2>
			{reports.map((report: ReportType, key: React.Key) => {
				return (
					<p key={key}>
						{report.week} | {report.plan} - {report.comments}
					</p>
				);
			})}
		</>
	);
};

export default ReportsOverview;
