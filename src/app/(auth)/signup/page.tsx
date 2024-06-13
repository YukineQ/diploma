import { Suspense } from 'react';

import { SignupPage } from '@/features/auth';

export default function Login() {
    return (
        <Suspense>
            <SignupPage />
        </Suspense>
    );
}