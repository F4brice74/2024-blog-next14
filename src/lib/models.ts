import mongoose, {Document, Model, Schema} from "mongoose";
import { Post } from "./types";
import { identity } from "@mantine/core/lib/core/factory/factory";

const postSchema:Schema = new mongoose.Schema<Post>({
  
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
        default: new Date()
    },
    deletedAt: {
        type: Date, 
        
    }, 
    isReference: {
        type: Boolean,        
        default:false
    }
   });

export const PostModel: Model<Post> = mongoose.models.Post || mongoose.model<Post>("Post", postSchema);

