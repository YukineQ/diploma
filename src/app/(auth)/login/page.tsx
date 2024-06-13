import { Suspense } from 'react';

import { LoginPage } from '@/features/auth';

export default function Login() {
    return (
        <Suspense>
            <LoginPage />
        </Suspense>
    );
}