"use server"

import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getPorfolioEntries() {
    const entries = await client.getEntries({content_type : 'portfoliov2'})
    console.log(entries)
    return entries;
}