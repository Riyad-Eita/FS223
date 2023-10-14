"use client";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PdfView from "@/components/pdf/pdf-view";
import { useUser } from "@/hooks/use-actions";
import { UserProfileType } from "@/types";

const EditorPage: React.FC<{}> = () => {
	const user = useUser({cookie: ""});
	const userProfile: UserProfileType = user.data;
	return (
		<div className="grid md:grid-cols-2 justify-between">
			<div>
				<h2>Report</h2>
				<p>...</p>
			</div>
			<PdfView {...userProfile} />
		</div>
	);
};

export default EditorPage;
