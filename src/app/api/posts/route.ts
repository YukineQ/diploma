import z from "zod"

import { auth } from "@/auth"
import { db } from "@/lib/prisma"

export async function POST(request: Request) {
    try {
        const session = await auth()

        if (!session?.user)
            return Response.json("Unauthorized", { status: 401 })

        const schema = z.object({
            title: z.string(),
            content: z.string(),
            subsiteId: z.string()
        })

        const { title, content, subsiteId } = schema.parse(request.body)

        const createPost = await db.post.create({
            data: {
                title: title,
                content: content,
                subsiteId: subsiteId,
                authorId: session.user.id!
            }
        })

        return Response.json(createPost, { status: 201 })
    } catch (error: any) {
        return Response.json(error.message, { status: 400 })
    }
}