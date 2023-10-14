import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuGroup,
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
import { UserProfileType } from "@/types";
import { ActionTooltip } from "@/components/action-tooltip";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarSettings = (profile: UserProfileType) => {
	const { onOpen } = useModal();
	const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

	const isAdmin = profile?.role?.toString() === "ADMIN";
	const isModerator = isAdmin || profile?.role?.toString() === "MODERATOR";

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
						<SettingsIcon className="h-6 w-6 text-foreground dark:text-primary-foreground" />
					</button>
				</DropdownMenuTrigger>
			</ActionTooltip>
			<DropdownMenuContent
				onMouseLeave={handleClose}
				className="w-56 text-xs font-medium text-foreground dark:text-primary-foreground bg-accent
				dark:bg-card/70 box-shadow backdrop:blur-lg"
			>
				<DropdownMenuLabel className="flex items-center">
					<p className="flex-1">My Account</p>
					<Avatar>
						<AvatarImage loading="lazy" src={profile?.userImage || ""} />
						<AvatarFallback>{profile?.firstname?.toLocaleUpperCase().slice(0,2)}</AvatarFallback>
					</Avatar>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{isModerator && (
						<DropdownMenuItem
							onClick={() => onOpen("invite", { profile })}
							className="text-primary dark:text-primary dark:brightness-150 px-3 py-2 text-sm cursor-pointer"
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
				</DropdownMenuGroup>
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
