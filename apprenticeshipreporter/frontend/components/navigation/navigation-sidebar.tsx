import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import logo from "@/images/logo.png";
import Image from "next/image";
import { SettingsIcon } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { Button } from "@/components/ui/button";

export const NavigationSidebar = () => {
	const profile = currentProfile();

	if (!profile) {
		return redirect("/");
	}

	const tools = db.tools;

	return (
		<div className="pt-4 space-y-4 flex flex-col items-center h-full w-full text-primary bg-slate-300 dark:bg-[#1E1F22] py-3">
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
			<Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
			<ScrollArea className="flex-1 w-full">
				{tools?.map((tool) => (
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
			<div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
				<ActionTooltip side="right" align="center" label="Theme">
					<div className="w-fit h-fit">
						<ModeToggle />
					</div>
				</ActionTooltip>
				<ActionTooltip side="right" align="center" label="Settings">
					<Button
						className="bg-transparent border-0"
						variant="outline"
						size="icon"
					>
						<SettingsIcon />
					</Button>
				</ActionTooltip>
			</div>
		</div>
	);
};
