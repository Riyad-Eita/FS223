const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-screen flex flex-col md:justify-center items-center flex-nowrap">
			{children}
		</div>
	);
};

export default AuthLayout;
