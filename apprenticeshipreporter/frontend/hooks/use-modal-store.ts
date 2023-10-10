import { UserProfileType } from "@/types";
import { type } from "os";
import { create } from "zustand";

export type ModalType = "signup" | "login" | "invite";

interface ModalData {
	signup?: { username?: string; email: string; password: string };
	signin?: { username: string; password: string };
	profile?: UserProfileType;
}
interface ModalStore {
	type: ModalType | null;
	data: ModalData;
	isOpen: boolean;
	onOpen: (type: ModalType, data?: ModalData) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data) => set({ type, isOpen: true, data }),
	onClose: () => set({ type: null, isOpen: false }),
}));
