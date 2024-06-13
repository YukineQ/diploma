import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ProfileNav } from "@/features/auth/components/profile-nav";
import { Suspense } from "react";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense>
            <div className="grid grid-cols-5 grid-rows-10 pt-5 max-w-7xl mx-auto h-full" >
                <aside className="sticky col-span-1 row-span-10">
                    <Sidebar />
                </aside>
                <div className="col-span-4 h-fit flex items-center justify-end gap-4 row-span-1">
                    <div className="relative w-64">
                        <Icons.search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search" className="pl-8 h-8 bg-content rounded-lg" />
                    </div>
                    <div className="space-x-2 flex items-center">
                        <Button variant='ghost' size='icon'>
                            <Icons.message className="w-5 h-5" />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <Icons.bell className="w-5 h-5" />
                        </Button>
                        <ModeToggle />
                    </div>
                    <ProfileNav />
                </div>
                <main className="col-span-4 row-span-9">
                    {children}
                </main>
                {/* <div className="layout-blur" /> */}
            </div>
        </Suspense>
    )
}   