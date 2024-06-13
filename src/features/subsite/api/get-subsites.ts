import { axios } from "@/lib/axios"
import { QueryConfig } from "@/lib/react-query"
import { Subsite } from "@prisma/client"
import { queryOptions, useQuery, useSuspenseQuery } from "@tanstack/react-query"

export const getSubsites = (): Promise<Subsite[]> => {
    return axios.get('/api/subsites')
}

export const getSubsitesQueryOptions = () => {
    return queryOptions({
        queryKey: ['subsites'],
        queryFn: () => getSubsites()
    })
}

type UseSubsitesOptions = {
    queryConfig?: QueryConfig<typeof getSubsites>;
}

export const useSubsites = ({
    queryConfig,
}: UseSubsitesOptions) => {
    return useQuery({
        ...getSubsitesQueryOptions(),
        ...queryConfig,
    })
}