import { PostModel } from "@/src/lib/models";
import { connectToDB } from "@/src/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: any }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await PostModel.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    throw new Error("error to fetch post");
  }
};

export const DELETE = async (request: any, { params }: { params: any }) => {
  const { slug } = params;
  try {
    connectToDB();
    await PostModel.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    throw new Error("error to delete post");
  }
};

