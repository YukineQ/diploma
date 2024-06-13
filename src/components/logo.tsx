import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
}

export function Logo({
    className,
}: LogoProps) {
    return (
        <h2 className={cn(
            "font-bold text-4xl tracking-tight leading-none",
            className
        )}>
            Forum
        </h2>
    )
}