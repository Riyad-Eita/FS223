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
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signin } from "@/lib/auth";
import { Loader2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "../ui/separator";

// import { ActionTooltip } from "@/components/action-tooltip";
// import { Button } from "@/components/ui/button";
// import { PenBox } from "lucide-react";

const formSchema = z.object({
	email: z.string().min(1, {
		message: "Username or Email must be provided",
	}),
	password: z.string().min(1, {
		message: "Password must be provided",
	}),
});
export const SignInCard = () => {
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await signin(values);

			console.log(response)

			if (!response.user) {
				toast.error(response.message, {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				handleFormFieldPasswordReset(values);
				return;
			}

			toast.success("Login successful", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			form.reset();
			router.push(`/`);
			return response.user;
		} catch (e) {
			console.error(e);
		}
	};

	const handleFormFieldPasswordReset = (values: z.infer<typeof formSchema>) => {
		form.reset({
			...values,
			password: "",
		});
		form.setFocus("password");
	};

	return (
		<>
			<Card className="max-w-full w-[32rem] p-8">
				<CardHeader className="space-y-1">
					<div className="flex items-center justify-between">
						<CardTitle className="text-2xl">Welcome back!</CardTitle>
						<ModeToggle />
					</div>
					<CardDescription>Provide your login credentials</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<div className="space-y-4">
								<FormField
									control={form.control}
									name="email"
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
													className="bg-[--card]/20 border-0 focus-visible:ring-1 text-[--card] focus-visible:ring-offset-0"
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
								<Separator />
								{(isLoading && (
									<Button
										className="w-full cursor-progress"
										variant="secondary"
										disabled
									>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Please wait
									</Button>
								)) || <Button className="w-full">Login</Button>}
							</div>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<div className="w-full flex flex-col justify-center items-center space-y-4">
						<p>or</p>
						<Button
							onClick={() => {
								router.push("/signup");
							}}
							variant={"outline"}
							className="w-full"
						>
							Create account
						</Button>
					</div>
				</CardFooter>
			</Card>
		</>
	);
};
