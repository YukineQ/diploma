import { cn } from "@/lib/utils";
import React from "react"
import { UseFormRegisterReturn } from "react-hook-form";

const MIN_TEXTAREA_HEIGHT = 32;

export type ResizeableTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
}

export const ResizableTextArea = ({
    registration,
    className,
    ...props
}: ResizeableTextAreaProps) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const [value, setValue] = React.useState('')
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)

    React.useLayoutEffect(() => {
        if (!textareaRef.current)
            return

        textareaRef.current.style.height = "inherit";

        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [value])

    return (
        <textarea
            ref={textareaRef}
            onChange={onChange}
            value={value}
            className={cn(`
                border-0 
                focus-visible:ring-0 
                focus-visible:ring-transparent 
                focus-visible:outline-none 
                focus-visible:border-0
                ml-[54px]
                text-4xl
                font-bold
                placeholder:text-white
                placeholder:opacity-30
                w-[600px]
                bg-transparent 
                resize-none 
                overflow-hidden
            `, className)}
            {...registration}
            {...props}
        />
    )
}