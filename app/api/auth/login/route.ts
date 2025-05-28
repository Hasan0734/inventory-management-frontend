import { BASE_API } from "@/lib/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  try {
    const URL = BASE_API + "/auth/signin";

    const apiRes = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json(resData, { status: apiRes.status });
    }



    return NextResponse.json(resData, { status: apiRes.status });
  } catch (error: any) {
    console.log(error);
    return new Response(error.message, {
      status: 500,
    });
  }
}
