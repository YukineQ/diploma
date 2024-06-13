import { LoginWithEmailForm } from "../components/login-with-email-form";

export function LoginWithEmail() {
    return (
        <>
            <h1 className="font-bold text-4xl tracking-tight">
                Log in to Forum
            </h1>
            <div className="w-80">
                <LoginWithEmailForm />
            </div>
        </>
    )
}

