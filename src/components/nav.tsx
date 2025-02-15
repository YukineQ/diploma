'use client'

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

interface NavProps {
    links: {
        title: string
        icon: LucideIcon
        variant: "default" | "ghost"
    }[]
}

export function Nav({ links }: NavProps) {
    return (
        <div
            className="group flex flex-col gap-4 py-2"
        >
            <nav
                className="
                    grid
                    gap-1
                    px-2
                "
            >
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href='#'
                        className={cn(
                            buttonVariants({ variant: link.variant, size: 'sm' }),
                            link.variant === 'default' &&
                            'dark:bg-content dark:text-white dark:hover:bg-muted dark:hover:text-white',
                            'justify-start'
                        )}
                    >
                        <link.icon className="mr-2 h-5 w-5" />
                        <span>{link.title}</span>
                    </Link>
                )
                )}
            </nav>
        </div>
    )
}