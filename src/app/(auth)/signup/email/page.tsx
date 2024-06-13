'use client'

import { Suspense } from 'react'

import { SignupWithEmail } from '@/features/auth/routes/signup-with-email'

export default function SignupWithEmailPage() {
    return (
        <Suspense>
            <SignupWithEmail />
        </Suspense>
    )
}
