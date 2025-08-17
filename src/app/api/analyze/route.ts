import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json(); // { input : "cat"}
		const input = body.input;

		const result = `You sent ${input}`;

		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.error("Error in /api/analyze: ", error);
		return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
	}
}
