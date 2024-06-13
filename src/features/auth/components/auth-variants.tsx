'use client'

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLinks } from "../lib/link-changer";
import { googleAuth } from "../api/google-auth";

export function AuthVariants() {
    const links = useLinks()

    return (
        <div className="flex flex-col gap-2.5 w-80">
            <Button
                onClick={async () => await googleAuth()}
                variant='secondary'
                size='lg'
                className="gap-1 h-12"
            >
                <Icons.google className="w-6 h-6 mt-0.5 fill-white" />
                Continue with Google
            </Button>
            <Button size='lg' className="bg-purple-600 hover:bg-purple-700 h-12 text-white">
                <Icons.facebook className="w-6 h-6 mt-0.5 fill-white" />
                Continue with Facebook
            </Button>
            <Button size='lg' className="gap-1 bg-blue-600 hover:bg-blue-700 h-12 text-white">
                <Icons.twitter className="w-6 h-6 mt-0.5 fill-white" />
                Continue with Twitter
            </Button>
            <Link
                href={links.withEmail.link}
                className={cn(
                    buttonVariants({ variant: 'link' }),
                    "text-blue-600 gap-1",
                )}
            >
                {links.withEmail.title}
                <Icons.arrowRight className="w-4 h-4" />
            </Link>
        </div>
    )
}