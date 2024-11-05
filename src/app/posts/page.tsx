
import { Post } from "@/src/lib/types";

import { Grid, Paper } from "@mantine/core";
import Link from "next/link";
import { getPosts } from "./api";


const Blog = async () => {
  
  const posts = await getPosts();
  return (
    <Grid>
      {posts.map((post: Post, idx: number) => (
          <Paper key={idx}>
           <h3>{post.title}</h3>
           <Link href={`/posts/${post.slug}`}>READ MORE</Link>        
        </Paper>
      ))}
    </Grid>
  );
};
export default Blog;
