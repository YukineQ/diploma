'use client'

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ResizableTextArea } from "@/components/resizeble-textarea";
import React from "react";
import { Form } from "@/components/ui/form";
import { createPostSchema, useCreatePost } from "../api/create-post";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SubsitesSelect } from "@/features/subsite/components/subsites-select";

const styles = {
    colors: {
        editor: {
            background: 'bg-transparent'
        },
    }
}

export const Editor = () => {
    const editor = useCreateBlockNote()
    const createPostMutation = useCreatePost({
        mutationConfig: {}
    })

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key != 'Enter')
            return

        editor.focus()
    }

    return (
        <Form
            id='create-comment'
            schema={createPostSchema}
            onSubmit={(values) => {
                createPostMutation.mutate({
                    data: values
                })
            }}
        >
            {({ register, formState }) => (
                <div className='grid w-full gap-10'>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center space-x-10">
                            <Link
                                href="/dashboard"
                                className={cn(buttonVariants({ variant: "ghost" }))}
                            >
                                <>
                                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                                    Back
                                </>
                            </Link>
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <button className={cn(buttonVariants({ variant: 'ghost' }))}>
                                {/* <Icons.arrowRight className="mr-2 h-4 w-4 animate-spin" /> */}
                                <span>Draft</span>
                            </button>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className={cn(buttonVariants({ size: 'default' }))}>
                                        {/* <Icons.arrowRight className="mr-2 h-4 w-4 animate-spin" /> */}
                                        <span>Publish</span>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>
                                            Choice a topic
                                        </DialogTitle>
                                        <DialogDescription>
                                            You can choice an existing topic.
                                            If you wanna publish this post from your's account select no topic option.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <SubsitesSelect />
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button autoFocus type="button" variant="secondary">
                                                Close
                                            </Button>
                                        </DialogClose>
                                        <Button type='submit'>Publish post</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className='prose prose-stone mx-auto w-[800px] h-fit'>
                        <ResizableTextArea
                            onKeyDown={onKeyDown}
                            rows={1}
                            placeholder="Untitled"
                            registration={register('content')}
                        />
                        <BlockNoteView
                            editor={editor}
                            theme={styles}
                        />
                    </div>
                </div>
            )}
        </Form>
    )
}