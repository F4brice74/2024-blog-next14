import { getEvents } from "@/src/lib/data";
import React from "react";

const Blog = async() => {
   const events = await getEvents();
   console.log(events)
  return <div>Hello Blog, {events[0].title}</div>;
};
export default Blog;
