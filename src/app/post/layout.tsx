import React from "react";

export default function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="p-8">
            {children}
        </main>
    )
}