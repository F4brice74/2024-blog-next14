import { Post } from "@/src/lib/types";

export const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts/", {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      throw new Error("it went wrong");
    }
    return res.json();
  };

 export const deletePost = async (slug: Post["slug"]) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      next: { revalidate: 0 }, method: "DELETE"
    });
    if (!res.ok) {
      throw new Error("it went wrong");
    }
    return res.json();
  };