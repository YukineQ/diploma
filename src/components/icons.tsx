import {
    Flame,
    Atom,
    Sun,
    Moon,
    Laptop,
    Search,
    Bell,
    MessageCircle,
    LucideProps,
    ArrowRight,
    Clock,
    Rss,
    ChevronLeft,
} from 'lucide-react'

export const Icons = {
    logo: Atom,
    popular: Flame,
    sun: Sun,
    moon: Moon,
    laptop: Laptop,
    search: Search,
    bell: Bell,
    message: MessageCircle,
    arrowRight: ArrowRight,
    clock: Clock,
    feed: Rss,
    chevronLeft: ChevronLeft,
    google: ({ ...props }: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" />
        </svg>
    ),
    facebook: ({ ...props }: LucideProps) => (
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path id="primary" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"></path>
        </svg>

    ),
    twitter: ({ ...props }: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fill-rule="evenodd" {...props}>
            <path d="M818 800 498.11 333.745l.546.437L787.084 0h-96.385L455.738 272 269.15 0H16.367l298.648 435.31-.036-.037L0 800h96.385l261.222-302.618L565.217 800zM230.96 72.727l448.827 654.546h-76.38L154.217 72.727z" transform="translate(103 112)" />
        </svg>
    )
}