import { db } from "@/lib/prisma"

export async function GET(request: Request) {
    try {
        const subsites = await db.subsite.findMany()

        return Response.json(subsites, { status: 200 })
    } catch (error: any) {
        return Response.json(error.message, { status: 400 })
    }
}