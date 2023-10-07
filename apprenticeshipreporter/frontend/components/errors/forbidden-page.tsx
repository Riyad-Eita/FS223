const ForbiddenPage = () => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl">Unauthorized</h1>
			<br />
			<p>Access not granted <b>(401)</b></p>
		</div>
	);
};

export default ForbiddenPage;
