"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditorPage = () => {
	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Create an account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" />
				</div>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Create account</Button>
			</CardFooter>
		</Card>
	);
};

export default EditorPage;
