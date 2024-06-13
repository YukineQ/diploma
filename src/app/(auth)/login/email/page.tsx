'use client'

import { Suspense } from 'react'

import { LoginWithEmail } from '@/features/auth/routes/login-with-email'

export default function LoginWithEmailPage() {
    return (
        <Suspense>
            <LoginWithEmail />
        </Suspense>
    )
}
