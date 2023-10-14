import { createPdf } from "@/lib/pdf";
import * as React from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useUser } from "@/hooks/use-actions";
import { UserProfileType } from "@/types";

const PdfView = ({ ...user }: UserProfileType) => {
	const [pdfBytes, setPdfBytes] = React.useState<Uint8Array>(
		new Uint8Array([])
	);

	React.useEffect(() => {
		async function fetchPdfBytes() {
			const bytes = await createPdf(user);
			setPdfBytes(bytes);
		}
		fetchPdfBytes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div
			className="max-w-[40vw]"
			style={{ filter: "drop-shadow(6px 4px 8px #00000F)" }}
		>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@latest/build/pdf.worker.js">
				{pdfBytes instanceof Uint8Array && (
					<div className="inset-0 overflow-hidden h-full w-full min-w-24 min-h-24">
						<Viewer
							fileUrl={pdfBytes}
							plugins={[defaultLayoutPluginInstance]}
						/>
					</div>
				)}
			</Worker>
		</div>
	);
};

export default PdfView;
