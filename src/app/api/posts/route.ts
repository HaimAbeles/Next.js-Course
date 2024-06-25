import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/posts
export async function GET() {
    const res: Response = await fetch('https://dummyjson.com/posts');
    const json = await res.json();
    return NextResponse.json(json.posts);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({ body })
}