import { PostModel } from "@/src/lib/models"
import { connectToDB } from "@/src/lib/utils"
import { NextResponse } from "next/server"

export const GET = async() => {
    try {        
        connectToDB()
        const posts = await PostModel.find()
        return NextResponse.json(posts)
    } catch (error) {
        throw new Error("error")
        
    }
}  