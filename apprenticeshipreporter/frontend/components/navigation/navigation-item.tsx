import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";
import { File, Home, LayoutDashboard } from "lucide-react";

interface NavigationItemProps {
	path: string;
	id: string;
	icon?: string;
	name: string;
}

export const NavigationItem = ({
	id,
	path,
	icon,
	name,
}: NavigationItemProps) => {
	const params = useParams();
	const router = useRouter();

	const onClick = () => {
		router.push(`/${path}`);
	};

	const lucidIcon = (e: string | undefined) => {
		switch (e) {
			case "Home":
				return <Home />;
			case "File":
				return <File />;
			case "Dashboard":
				return <LayoutDashboard />;
			default:
				return;
		}
	};

	return (
		<ActionTooltip side="right" align="center" label={name}>
			<button onClick={onClick} className="group relative flex items-center">
				<div
					className={cn(
						"absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
						params?.reportId !== path && "group-hover:h-[20px]",
						params?.reportId === path ? "h-[36px]" : "h-[8px]"
					)}
				/>
				<div
					className={cn(
						"flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[--background] dark:bg-neutral-700 group-hover:bg-[--logo-primary-color]",
						params?.reportId === path &&
							"bg-primary/10 text-primary rounded-[16px]"
					)}
				>
					{icon !== undefined ? (
						<>{lucidIcon(icon)}</>
					) : (
						<div className="flex items-center justify-center w-full h-full text-2l font-bold text-primary">
							{name.toLocaleUpperCase().slice(0, 4)}
						</div>
					)}
				</div>
			</button>
		</ActionTooltip>
	);
};
