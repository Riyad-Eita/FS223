import { v4 as uuid4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserProfileType } from "@/types";

export async function GET() {
	try {
		const userParams = { name: "User", pass: "user" };

		const activeUser: UserProfileType | undefined = await db.profiles.find(
			(profile) => {
				if (
					(profile.userName === userParams.name ||
						profile.userEmail === userParams.name) &&
					profile.userPassword === userParams.pass
				)
					return profile;
				return null;
			}
		); // await currentProfile();

		if (!activeUser) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const user = db.profiles.find((item) => {
			return item.userId === activeUser.userId ? item : null;
		});

		if (!user) {
			throw new Error("Current Profile not in database");
		}

		return NextResponse.json(user);
	} catch (error) {
		console.log("[SERVER_POST]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
