import { AuthLayout } from "@/features/auth"

export default function AppAuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    )
}
