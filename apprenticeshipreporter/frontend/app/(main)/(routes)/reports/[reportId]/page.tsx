interface ReportProps {
	reportId: string;
}

const Report = ({ reportId }: ReportProps) => {
	return <>Report: {reportId}</>;
};

export default Report;
