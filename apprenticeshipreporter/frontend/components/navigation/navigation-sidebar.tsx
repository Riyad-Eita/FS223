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
import { cn } from "@/lib/utils";

type NavigationSidebarProps = {
	profile: UserProfileType;
	db: DatabaseType;
	pos: string;
};

export const NavigationSidebar = ({
	profile,
	db,
	pos,
}: NavigationSidebarProps) => {
	/* if (!profile) {
		return redirect("/");
	} */

	enum ToolIcon {
		Home = "Home",
		File = "File",
		Dashboard = "Dashboard",
	}

	const tools = [
		{ id: "1", name: "Home", path: "", icon: "Home" },
		{
			id: "2",
			name: "Report Overview",
			path: "reports",
			icon: "Dashboard",
		},
		{ id: "3", name: "Editor", path: "editor", icon: "Pen" },
		{ id: "4", name: "PDF Generator", path: "pdf-gen", icon: "File" },
		{ id: "5", name: "Sign In", path: "signin", icon: "SignIn" },
		{ id: "6", name: "Sign Up", path: "signup", icon: "SignUp" },
		{ id: "7", name: "Log Out", path: "signout", icon: "SignOut" },
		//{ id: "8", name: "PDF Generator", path: "2", icon: "File" },<w
		//{ id: "8", name: "PDF Generator", path: "3", icon: "File" },
		//{ id: "8", name: "PDF Generator", path: "4", icon: "File" },
		//{ id: "8", name: "PDF Generator", path: "5", icon: "File" },
		//{ id: "8", name: "PDF Generator", path: "6", icon: "File" },
		//{ id: "8", name: "PDF Generator", path: "7", icon: "File" },
	];

	const navItems = (
		<>
			{tools
				?.sort((a, b) => (a.id === b.id ? 0 : a.id < b.id ? -1 : 1))
				.map((tool) => (
					<div
						key={tool.id}
						className={cn((pos === "left" && "mb-4") || "mr-4")}
					>
						<NavigationItem
							pos={pos}
							id={tool.id}
							icon={tool.icon}
							path={tool.path}
							name={tool.name || " "}
						/>
					</div>
				))}
		</>
	);

	const customSeperator = (
		<Separator
			className={cn(
				(pos === "left" && "h-[2px] w-10 mx-auto") || "w-[2px] h-10 my-auto",
				"bg-foreground/20 dark:bg-foreground/20 rounded-md"
			)}
		/>
	);

	return (
		<div
			className={cn(
				(pos === "left" && "flex-col pt-4 py-3 space-y-4 h-full") ||
					"flex-row pl-3 px-3 space-x-4 w-full",
				"flex items-center text-foreground bg-slate-300 dark:bg-[#1E1F22]"
			)}
		>
			<Button
				className={cn(
					(pos === "left" && "my-2 ") || "mx-2",
					"max-h-[48px] max-w-[48px] bg-transparent border-0"
				)}
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
			{customSeperator}

			{(pos === "left" && (
				<ScrollArea className="flex-1 h-full w-full">{navItems}</ScrollArea>
			)) || (
				<div className="flex flex-row w-full flex-1 h-full">{navItems}</div>
			)}

			{customSeperator}
			<div
				className={cn(
					(pos === "left" && "flex-col gap-y-4 pt-1 pb-3 mt-auto") ||
						"flex-row gap-x-4 py-2 ml-auto",
					" flex items-center h-fit w-fit"
				)}
			>
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
