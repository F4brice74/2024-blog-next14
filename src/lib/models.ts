import mongoose, {Document, Model, Schema} from "mongoose";

export type IEventApe =  {
    title: string,
    description: string,
    imageUrl: string,
    slug: string,
    createdAt: Date,
}

const eventSchema:Schema = new mongoose.Schema<IEventApe>({
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

const homeSchema: Schema = new mongoose.Schema({
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

export const Event: Model<IEventApe> = mongoose.models.Event || mongoose.model<IEventApe>("Event", eventSchema);
export const HomeArticle = mongoose.models.HomeArticle || mongoose.model("HomeArticle", homeSchema);
