"use client";

import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useModal } from "@/hooks/use-modal-store";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signup } from "@/lib/auth";
import { ModeToggle } from "@/components/mode-toggle";

// import { ActionTooltip } from "@/components/action-tooltip";
// import { Button } from "@/components/ui/button";
// import { PenBox } from "lucide-react";

const formSchema = z.object({
	firstname: z.string().min(0, {
		message: "firstname required",
	}),
	lastname: z.string().min(0, {
		message: "lastname required",
	}),
	email: z.string().min(1, { message: "Email is required" }).email({
		message: "Must be a valid email",
	}),
	password: z.string().min(6, { message: "Password must be atleast 6 characters" })
});

const SignUpPage = () => {
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			password: ""
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await signup(values);
		form.reset();
		router.refresh();
	};
	return (
		<>
			<Card className="max-w-full w-[32rem]">
				<CardHeader className="space-y-1">
					<div className="flex items-center justify-between">
						<CardTitle className="text-2xl">Create an account</CardTitle>
							<ModeToggle />
					</div>
					<CardDescription>
						Enter your email below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<div className="space-y-8">
								<FormField
									control={form.control}
									name="firstname"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="uppercase text-xs font-bold">
												First Name
											</FormLabel>
											<FormControl>
												<Input
													disabled={isLoading}
													className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
													placeholder="Enter Your First Name"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-xs text-red-500">
												{form.formState.errors.firstname?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastname"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="uppercase text-xs font-bold">
												Last Name
											</FormLabel>
											<FormControl>
												<Input
													disabled={isLoading}
													className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
													placeholder="Enter Your Last Name"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-xs text-red-500">
												{form.formState.errors.lastname?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="uppercase text-xs font-bold">
												E-Mail
											</FormLabel>
											<FormControl>
												<Input
													disabled={isLoading}
													className="bg-[--card]/20 border-0 focus-visible:ring-0 text-[--card] focus-visible:ring-offset-0"
													placeholder="Enter Your E-Mail"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-xs text-red-500">
												{form.formState.errors.email?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
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
												{form.formState.errors.password?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
							</div>
							<DialogFooter className="bg-grey-100 py-4">
								<Button disabled={isLoading} className="w-full">
									Create account
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</CardContent>
			</Card>
		</>
	);
};

export default SignUpPage;
