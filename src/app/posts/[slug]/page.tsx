import { PostModel } from "@/src/lib/models";
import { Post } from "@/src/lib/types";
import { LoadingOverlay } from "@mantine/core";
import React from "react";

const getData = async (slug: string) : Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}/`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const SinglePostPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getData(slug);

  console.log("post in slug", post)
  //if(!event)return <LoadingOverlay />

  return (
    <>
      <h1>{post.title}</h1><p>{post.description}</p>
      <img src={post.imageUrl}/>
    </>
  );
};

export default SinglePostPage;
