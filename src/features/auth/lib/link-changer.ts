import { usePathname } from "next/navigation"

type LinkItem = {
    link: string;
    title: string;
}

export type AuthLinksItems = {
    withEmail: LinkItem;
    anotherAuthOption: LinkItem;
    navLink: LinkItem;
    email: {
        anotherAuthOption: LinkItem;
        navLink: LinkItem;
    };
}

interface AuthLinks {
    signup: AuthLinksItems;
    login: AuthLinksItems;
}

const links = {
    signup: {
        withEmail: {
            link: 'signup/email',
            title: 'Continue with Email'
        },
        anotherAuthOption: {
            link: '/login',
            title: 'Already have an account? Login'
        },
        navLink: {
            link: '/login',
            title: 'Login'
        },
        email: {
            anotherAuthOption: {
                link: '/login',
                title: 'Already have an account? Login'
            },
            navLink: {
                link: '/login',
                title: 'Login'
            },
        }
    },
    login: {
        withEmail: {
            link: 'login/email',
            title: 'Continue with Email'
        },
        anotherAuthOption: {
            link: '/signup',
            title: `Don't have an account? Sign Up`
        },
        navLink: {
            link: '/signup',
            title: 'Sign Up'
        },
        email: {
            anotherAuthOption: {
                link: '/signup',
                title: `Don't have an account? Sign Up`
            },
            navLink: {
                link: '/signup',
                title: 'Sign Up'
            },
        }
    }
} as AuthLinks

function resolve(path: string, obj: any) {
    return path.split('/').reduce(function (prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}

export function useLinks() {
    const pathName = usePathname()
    const removeFirstSlash = pathName.substring(1)

    return resolve(removeFirstSlash, links)
}