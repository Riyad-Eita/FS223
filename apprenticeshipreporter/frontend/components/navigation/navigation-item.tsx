import { useRouter, usePathname } from "next/navigation";
import { ActionTooltip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";
import { File, Home, LayoutDashboard } from "lucide-react";
import { ToolType } from "@/types";

type NavigationItemProps = ToolType;

export const NavigationItem = ({
	id,
	path,
	icon,
	name,
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
			default:
				return;
		}
	};

	return (
		<ActionTooltip key={id} side="right" align="center" label={name}>
			<button onClick={onClick} className="group relative flex items-center">
				<div
					className={cn(
						"absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
						!active && "group-hover:h-[20px]",
						active ? "h-[36px]" : "h-[8px]"
					)}
				/>
				<div
					className={cn(
						"flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-muted dark:bg-neutral-700 group-hover:bg-primary",
						active && "bg-primary/10 text-primary-foreground rounded-[16px]"
					)}
				>
					{icon !== undefined ? (
						<div className="flex items-center justify-center w-full h-full text-2l font-bold">
							{lucidIcon(icon)}
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-full text-2l font-bold">
							{name.toLocaleUpperCase().slice(0, 4)}
						</div>
					)}
				</div>
			</button>
		</ActionTooltip>
	);
};
