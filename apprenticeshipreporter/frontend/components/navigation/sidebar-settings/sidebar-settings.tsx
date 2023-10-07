import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ChevronDown,
	LogOut,
	PlusCircle,
	Settings,
	SettingsIcon,
	Trash,
	Trash2,
	User,
	UserPlus,
	Users,
} from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { ProfileType } from "@/types";
import { ActionTooltip } from "@/components/action-tooltip";
import { useEffect, useState } from "react";

const SidebarSettings = (profile: ProfileType) => {
	const { onOpen } = useModal();
	const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

	const isAdmin = profile.role?.toString() === "ADMIN";
	const isModerator = isAdmin || profile.role?.toString() === "MODERATOR";

	useEffect(() => {}, [dropdownMenuOpen]);

	const handleOnClick = () => {
		setDropdownMenuOpen(true);
	};

	const handleClose = () => {
		setDropdownMenuOpen(false);
	};

	return (
		<DropdownMenu open={dropdownMenuOpen} onOpenChange={handleClose}>
			<ActionTooltip side="right" align="center" label="Settings">
				<DropdownMenuTrigger asChild>
					<button onClick={handleOnClick} className="outline-none">
						<SettingsIcon className="h-6 w-6" />
					</button>
				</DropdownMenuTrigger>
			</ActionTooltip>
			<DropdownMenuContent
				onMouseLeave={handleClose}
				className="w-56 text-xs font-medium text-black dark:text-neutral-300 bg-[--card]"
			>
				{isModerator && (
					<DropdownMenuItem
						onClick={() => onOpen("invite", { profile })}
						className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
					>
						Invite People
						<UserPlus className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{isAdmin && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
						Manage Members
						<Users className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
						Account
						<User className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				}

				{isModerator && (
					<DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
						Create Ticket
						<PlusCircle className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
				{isAdmin && <DropdownMenuSeparator />}
				{(isAdmin && (
					<DropdownMenuItem className="text-rose-500 px-3 py-2 text-sm cursor-pointer">
						Delete Report
						<Trash className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)) || (
					<DropdownMenuItem className="text-rose-500 px-3 py-2 text-sm cursor-pointer">
						Leave Room
						<LogOut className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SidebarSettings;
