import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSubsites } from "../api/get-subsites"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { auth } from "@/auth"

export const SubsitesSelect = () => {
    const { data: subsites, isLoading } = useSubsites({})

    const subsitesWithEnabledEditing = subsites?.filter(s => s.isEnableWriting)

    return subsitesWithEnabledEditing && (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder='Select topic' />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value='self'>                       
                        <span>No topic</span>
                    </SelectItem>
                    {subsitesWithEnabledEditing.map((item) => (
                        <SelectItem value={item.id}>
                            <Avatar>
                                <AvatarImage src={item.avatar!} alt={item.name} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>{item.name}</span>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}