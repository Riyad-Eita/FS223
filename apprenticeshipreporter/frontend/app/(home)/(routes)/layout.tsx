const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-screen">
			{children}
		</div>
	);
};

export default AuthLayout;
