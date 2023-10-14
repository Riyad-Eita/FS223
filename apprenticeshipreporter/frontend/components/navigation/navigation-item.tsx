import { useRouter, usePathname } from "next/navigation";
import { ActionTooltip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";
import { File, Home, LayoutDashboard, LogInIcon, LogOutIcon, LucideLogIn, Paperclip, Pen } from "lucide-react";
import { ToolType } from "@/types";

type NavigationItemProps = ToolType & { pos: string };

export const NavigationItem = ({
	id,
	path,
	icon,
	name,
	pos,
}: NavigationItemProps) => {
	const router = useRouter();
	const active = usePathname() === "/" + path;

	const onClick = () => {
		router.push(`/${path}`);
	};

	const lucidIcon = (e: string | undefined | null) => {
		switch (e) {
			case "Home":
				return <Home />;
			case "File":
				return <File />;
			case "Dashboard":
				return <LayoutDashboard />;
			case "Pen":
				return <Pen />;
			case "SignIn":
				return <LogInIcon />;
			case "SignUp":
				return <Paperclip />;
			case "SignOut":
				return <LogOutIcon />;
			default:
				return;
		}
	};

	return (
		<ActionTooltip key={id} side="right" align="center" label={name || ""}>
			<button onClick={onClick} className="group relative flex items-center">
				<div
					className={cn(
						(pos === "left" &&
							cn(
								"absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
								!active && "group-hover:h-[20px]",
								active ? "h-[36px]" : "h-[8px]"
							)) ||
							cn(
								"absolute top-0 right-0 left-0 mx-auto bg-primary rounded-r-full transition-all h-[4px]",
								!active && "group-hover:w-[20px]",
								active ? "w-[36px]" : "w-[8px]"
							)
					)}
				/>
				<div
					className={cn(
						(pos === "left" &&
							cn(
								"flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-muted dark:bg-neutral-700 group-hover:bg-primary",
								active && "bg-primary/10 text-primary-foreground rounded-[16px]"
							)) ||
							cn(
								"flex my-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-muted dark:bg-neutral-700 group-hover:bg-primary",
								active && "bg-primary/10 text-primary-foreground rounded-[16px]"
							)
					)}
				>
					{icon !== undefined ? (
						<div className="flex items-center justify-center w-full h-full text-2l font-bold">
							{lucidIcon(icon)}
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-full text-2l font-bold">
							{name?.toLocaleUpperCase().slice(0, 4)}
						</div>
					)}
				</div>
			</button>
		</ActionTooltip>
	);
};
