'use client'

import { AuthVariants } from "../components/auth-variants";
import { useLinks } from "../lib/link-changer";

export function LoginPage() {
    const temp = useLinks();

    return (
        <>
            <h1 className="font-bold text-4xl tracking-tight">
                Log in to Forum
            </h1>
            <AuthVariants />
        </>
    )
}