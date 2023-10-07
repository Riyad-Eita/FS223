import { v4 as uuid4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
	try {
		const profile = await currentProfile();

		if (!profile) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

    const reports = db.reports

		const body = { profile, reports };

		return NextResponse.json(body);
	} catch (error) {
		console.log("[SERVER_POST]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
