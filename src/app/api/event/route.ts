import { Event } from "@/src/lib/models"
import { connectToDB } from "@/src/lib/utils"
import { NextResponse } from "next/server"

export const GET = async(request) => {
    try {
        
        connectToDB()
        const events = await Event.find()
        return NextResponse.json(events)
    } catch (error) {
        console.log("error")
        
    }
}  