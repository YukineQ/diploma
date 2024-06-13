"use client"

import React from "react";

import { Nav } from "./nav";
import { Icons } from "./icons";
import { ScrollArea } from "./ui/scroll-area";
import { Logo } from "./logo";

export function Sidebar() {
    return (
        <ScrollArea className="w-48">
            <div className="px-5 pb-3">
                <Logo />
            </div>
            <Nav
                links={[
                    {
                        title: 'Popular',
                        icon: Icons.popular,
                        variant: 'default',
                    },
                    {
                        title: 'Recent',
                        icon: Icons.clock,
                        variant: 'ghost',
                    },
                    {
                        title: 'Feed',
                        icon: Icons.feed,
                        variant: 'ghost',
                    }
                ]}
            />
        </ScrollArea>
    )
}