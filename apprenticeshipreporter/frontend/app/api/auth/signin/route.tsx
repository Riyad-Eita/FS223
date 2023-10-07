import { v4 as uuid4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import { cookies } from "next/headers";

import { setCookie } from "nookies";

export async function POST(req: NextRequest) {
	try {
		const cookieStore = cookies();
		const token = cookieStore.get("appreticeship-reporter") || {
			value: "",
			name: "",
		};
		const { name, pass } = await req.json();

		// check if name matches in db
		const body =
			db.profiles.find((profile) => {
				if (
					(profile.userName === name || profile.userEmail === name) &&
					profile.userPassword === pass
				)
					return profile;
				return null;
			}) || null;

		if (!body) return NextResponse.json(false);
		setCookie(
			{ res: NextResponse },
			"appreticeship-reporter",
			token.value.toString(),
			{ path: "/" }
		);
		return NextResponse.json(true);
	} catch (error) {
		console.log("[SERVER_POST]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
