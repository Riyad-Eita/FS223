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

const formSchema = z.object({
	name: z.string().min(0, {
		message: "Username is optional.",
	}),
	mail: z.string().email({
		message: "Please enter a valid email address.",
	}),
	pass: z.string().min(4, {
		message: "Password has to be a at least 4 characters long.",
	}),
});

export const SignUpModal = () => {
	const { isOpen, onClose, type } = useModal();
	const router = useRouter();

	const isModalOpen = isOpen && type === "signup";

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			mail: "",
			pass: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.post("/api/auth/signup", values);
			form.reset();
			router.refresh();
		} catch (e) {
			console.error(e);
		}
	};

	const handleClose = () => {
		form.reset();
		onClose();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-stone-700/10 text-[--card] p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-2xl text-center font-bold">
						Welcome!
					</DialogTitle>
					<DialogDescription className="text-center">
						Sign up to access tool
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
											User Name
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
												placeholder="Enter Your Username"
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
								name="mail"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold">
											Email
										</FormLabel>
										<FormControl>
											<Input
												disabled={isLoading}
												className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
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
												className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
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
							<Button disabled={isLoading} variant="outline">
								Sign Up
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
