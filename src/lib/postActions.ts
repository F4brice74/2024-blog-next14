    "use server"
import { revalidatePath } from "next/cache"
import { PostModel } from "./models"
import { connectToDB } from "./utils"


export const createPost = async(formData:FormData )=> {

    const {title, desc, slug} = Object.fromEntries(formData)
    try {
        connectToDB()
        const newPost = new PostModel({
            title, 
            description: desc,
            slug,
            createdAt: new Date(),
            isReference: false               
        })           
        await newPost.save()
        revalidatePath('/posts')
    } catch (error) {
        console.log(error)
        
    }
}

export const deletePost = async(id:string )=> {
    try {
        connectToDB()       
        await PostModel.findByIdAndDelete(id)
        revalidatePath('/posts')
    } catch (error) {
        console.log(error)  
    }
}