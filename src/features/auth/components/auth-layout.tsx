'use client'

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { AuthLinksItems, useLinks } from "../lib/link-changer";

export function AuthNavbar({ links }: { links: AuthLinksItems }) {
    return (
        <header>
            <div className="h-14 flex items-center justify-between mx-8">
                <Logo />
                <div className="space-x-1">
                    <Button variant='link' size='sm'>
                        Contact
                    </Button>
                    <Link
                        href={links.navLink.link}
                        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                    >
                        {links.navLink.title}
                    </Link>
                </div>
            </div>
        </header>
    )
}

type LayoutProps = {
    children: React.ReactNode;
}

export function AuthLayout({
    children,
}: LayoutProps) {
    const links = useLinks()

    return (
        <div className="h-full flex flex-col">
            <AuthNavbar links={links} />
            <main className="flex flex-1">
                <div className="flex flex-col flex-1 items-center justify-center space-y-10">
                    {children}
                </div>
            </main>
            <div className="flex items-center justify-center h-20 bg-[#000] border-t">
                <Link
                    href={links.anotherAuthOption.link}
                    className={cn(
                        buttonVariants({ variant: 'link' }),
                        "text-blue-600",
                    )}
                >
                    {links.anotherAuthOption.title}
                </Link>
            </div>
        </div>
    )
}