'use server'

import { signIn } from "@/auth";

export async function googleAuth() {
    return await signIn('google')
}