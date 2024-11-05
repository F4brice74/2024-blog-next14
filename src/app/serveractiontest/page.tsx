
import { createPost } from "@/src/lib/postActions"
import { Button, TextInput } from "@mantine/core"
const ServerActionTestPage = () => {
    
    return (
        <div>
            <form action={createPost}>
                <TextInput 
                placeholder="title"
                label="title"
                name="title"
                />
                 <TextInput 
                placeholder="description"
                label="description"
                name="desc"
                />
                 <TextInput 
                placeholder="slug"
                label="slug"
                name="slug"
                />            
                <Button type="submit">Create</Button> 
            </form>
        </div>
    )
}

export default ServerActionTestPage