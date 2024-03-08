import { createClient } from "contentful";
import { NextRequest, NextResponse } from "next/server"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function GET(request: NextRequest) {
    const entries = await client.getEntries({ content_type: 'portfoliov2' })

    return NextResponse.json(entries.items)
}