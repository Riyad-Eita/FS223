import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRedirectAfterSomeSeconds from "@/hooks/use-redirect-timer";

const ForbiddenPage = () => {
	const { secondsRemaining } = useRedirectAfterSomeSeconds("/login", 10);

	useEffect(() => {
		setTimeout(() => {
			toast.error("Unauthorized", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 4000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}, 500);
	}, []);

	return (
		<>
			<div className="h-screen w-screen flex flex-col justify-center items-center">
				<h1 className="text-3xl">Unauthorized</h1>
				<br />
				<p>
					Access not granted <b>(401)</b>
				</p>
				<p>Redirect to login in {secondsRemaining} seconds</p>
			</div>
		</>
	);
};

export default ForbiddenPage;
