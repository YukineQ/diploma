import { axios } from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { Post } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export const createPostSchema = z.object({
    title: z.string().min(10, 'Required'),
    content: z.string().min(1, 'Required'),
    subsiteId: z.string()
})

export type CreatePost = z.infer<typeof createPostSchema>;

export const createPost = ({
    data,
}: {
    data: CreatePost;
}): Promise<Post> => {
    return axios.post('/posts', data)
}

type UseCreatePostOptions = {
    mutationConfig?: MutationConfig<typeof createPost>
}

export const useCreatePost = ({
    mutationConfig
}: UseCreatePostOptions) => {
    const queryClient = useQueryClient()

    const { onSuccess, ...restConfig } = mutationConfig || {}

    return useMutation({
        onSuccess: (...args) => {
            queryClient.invalidateQueries({
                queryKey: ['temp']
            })
            onSuccess?.(...args)
        },
        ...restConfig,
        mutationFn: createPost
    })
}