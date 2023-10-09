"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { login } from "@/lib/auth";

const formSchema = z.object({
	name: z.string().min(1, {
		message: "Username or Email must be provided",
	}),
	pass: z.string().min(1, {
		message: "Password must be provided",
	}),
});

export const SignInModal = () => {
	const { isOpen, onClose, type } = useModal();
	const [formError, setFormError] = useState(false);
	const router = useRouter();

	const isModalOpen = isOpen && type === "login";

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			pass: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await login(values);
			if (response?.data !== null) {
				toast.success("Login successful", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				handleClose();
			} else {
				toast.error("Login failed", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				form.reset({
					...values,
					pass: "",
				});
				form.setFocus("pass");
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handleClose = () => {
		form.reset();
		onClose();
		router.push(`/`);
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-stone-700/10 text-[--card] dark:text-[--card] p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-2xl text-center font-bold">
						Welcome back!
					</DialogTitle>
					<DialogDescription className="text-center">
						Login to access tool
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div className="space-y-8 px-6">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold">
											Email or Username
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className="bg-[--card]/20 border-0 focus-visible:ring-1 text-[--card] focus-visible:ring-offset-0"
												placeholder="Enter Your Email"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-xs text-red-500">
											{form.formState.errors.name?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="pass"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold">
											Password
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												type="password"
												className="bg-[--card]/20 border-0 focus-visible:ring-1 text-[--card] focus-visible:ring-offset-0"
												placeholder="Enter Password"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-xs text-red-500">
											{form.formState.errors.name?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter className="bg-grey-100 px-6 py-4">
							{(isLoading && (
								<Button disabled>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Please wait
								</Button>
							)) || <Button variant="outline">Login</Button>}
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
