import { v4 as uuid4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
	try {
		const { name, mail, pass } = await req.json();

		const profile = await currentProfile();
    
		const newUser = {
			userId: uuid4(),
			userEmail: mail,
			userName: name || "",
			userPassword: pass,
			userImage: "userImage2",
			language: "de",
		};

		const body = await db.profiles.push(newUser);

		console.log(db.profiles);

		return NextResponse.json(body);
	} catch (error) {
		console.log("[SERVER_POST]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
