import { Event, HomeArticle } from "./models";
import { connectToDB } from "./utils";

export const getEvents = async () => {
    try {
        connectToDB();
        const events = await Event.find({});
        return events
        
    } catch (error) {
        throw new Error("Error fetching events");
        
    }
}

export const getEvent = async (slug: string) => {
    try {
        connectToDB();
        const event = await Event.find({slug});
        return event
        
    } catch (error) {
        throw new Error("Error fetching event");
        
    }
}

export const getHomeArticles = async () => {
    try {
        connectToDB();
        const homeArticles = await HomeArticle.find();
        return homeArticles
        
    } catch (error) {
        throw new Error("Error fetching homeArticles");
        
    }
}

export const getHomeArticle = async (version: number) => {
    try {
        connectToDB();
        const homeArticle = await HomeArticle.find({version});
        return homeArticle
        
    } catch (error) {
        throw new Error("Error fetching homeArticle");
        
    }
}