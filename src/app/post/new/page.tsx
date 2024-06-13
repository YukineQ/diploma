import dynamic from "next/dynamic";

const Editor = dynamic(
    () => import('@/features/posts/components/editor')
        .then((module) => module.Editor),
    { ssr: false }
)

export default function NewPostPage() {
    return (
        <Editor />
    )
}