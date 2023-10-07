const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			{children}
		</div>
	);
};

export default AuthLayout;
