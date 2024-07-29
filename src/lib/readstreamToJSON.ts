export default async function readStreamToJSON(
    stream: any | null
): Promise<any[]> {
    "use server";
    // jkrfcdo j
    if (!stream) {
        return [];
    }

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    return JSON.parse(Buffer.concat(chunks).toString());
}
