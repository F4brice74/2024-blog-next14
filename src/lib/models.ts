import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
   });

const homeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    version: {
        type: Number,
        required: true,
        unique: true,
    },
    mainDescription: {
        type: String,
        required: true,
    },
    secondDescription: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
});

export const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export const HomeArticle = mongoose.models.HomeArticle || mongoose.model("HomeArticle", homeSchema);
