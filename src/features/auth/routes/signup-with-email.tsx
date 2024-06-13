import { SignupWithEmailForm } from "../components/signup-with-email-form"

export function SignupWithEmail() {
    return (
        <>
            <h1 className="font-bold text-4xl tracking-tight">
                Signup in to Forum
            </h1>
            <div className="w-80">
                <SignupWithEmailForm />
            </div>
        </>
    )
}

