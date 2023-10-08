import { redirect } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import logo from "@/images/logo.png";
import Image from "next/image";
import { ActionTooltip } from "@/components/action-tooltip";
import { Button } from "@/components/ui/button";
import SidebarSettings from "./sidebar-settings/sidebar-settings";
import { UserProfileType, DatabaseType } from "@/types";
import { type } from "os";

type NavigationSidebarProps = {
	profile: UserProfileType;
	db: DatabaseType;
};

export const NavigationSidebar = ({ profile, db }: NavigationSidebarProps) => {
	if (!profile) {
		return redirect("/");
	}

	enum ToolIcon {
		Home = "Home",
		File = "File",
		Dashboard = "Dashboard",
	}

	const tools = [
		{ id: "1", name: "Home", path: "", icon: ToolIcon.Home },
		{
			id: "2",
			name: "Report Overview",
			path: "reports",
			icon: ToolIcon.Dashboard,
		},
		{ id: "3", name: "PDF Generator", path: "pdf-gen", icon: ToolIcon.File },
	];

	return (
		<div className="pt-4 space-y-4 flex flex-col items-center h-full w-full text-foreground bg-slate-300 dark:bg-[#1E1F22] py-3">
			<Button
				className="mt-2 mb-2 max-h-[48px] max-w-[48px] bg-transparent border-0"
				variant="outline"
				size="icon"
			>
				<Image
					src={logo}
					priority={true}
					alt="Apprenticeship Reporter Logo"
					height="48"
					width="48"
				/>
			</Button>
			<Separator className="h-[2px] bg-foreground/20 dark:bg-foreground/20 rounded-md w-10 mx-auto" />
			<ScrollArea className="flex-1 w-full">
				{tools
					?.sort((a, b) => (a.id === b.id ? 0 : a.id < b.id ? -1 : 1))
					.map((tool) => (
						<div key={tool.id} className="mb-4">
							<NavigationItem
								id={tool.id}
								icon={tool.icon}
								path={tool.path}
								name={tool.name || " "}
							/>
						</div>
					))}
			</ScrollArea>
			<Separator className="h-[2px] bg-foreground/20 dark:bg-foreground/20 rounded-md w-10 mx-auto" />
			<div className="pt-1 pb-3 mt-auto flex items-center flex-col gap-y-4">
				<ActionTooltip side="right" align="center" label="Theme">
					<div className="w-fit h-fit">
						<ModeToggle />
					</div>
				</ActionTooltip>
				<SidebarSettings {...profile} />
			</div>
		</div>
	);
};
