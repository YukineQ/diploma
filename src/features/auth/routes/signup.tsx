import { AuthVariants } from "../components/auth-variants";

export function SignupPage() {
    return (
        <>
            <h1 className="font-bold text-4xl tracking-tight text-center">
                Create Your <br />
                Forum Account
            </h1>
            <AuthVariants />
        </>
    )
}