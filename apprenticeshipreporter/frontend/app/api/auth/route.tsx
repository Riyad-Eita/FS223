import { v4 as uuid4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Profile } from "@/types";

export async function GET() {
	try {
		const activeUser: Profile | null = await currentProfile();

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
