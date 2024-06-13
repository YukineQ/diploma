'use client'

import React from 'react'
import { QueryClientProvider, QueryClient, QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from "@/components/theme-provider";

import { queryConfig } from '@/lib/react-query'
import { Button } from '@/components/ui/button'

const ErrorFallback = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='md:text-5xl text-3xl font-bold tracking-tight text-white py-4'>
                Something went wrong!
            </h1>
            <Button
                size='lg'
                className='w-fit'
                onClick={() => window.location.assign(window.location.href)}
            >
                Refresh
            </Button>
        </div>
    )
}

export function AppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: queryConfig }))

    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                            {children}
                        </ThemeProvider>
                    </QueryClientProvider>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    )
}