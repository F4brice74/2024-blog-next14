import { sayHello } from "@/src/lib/action";
import { getEvents } from "@/src/lib/data";
import { Button, LoadingOverlay } from "@mantine/core";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/event/", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("it went wrong");
  }
  return res.json();
};

const Blog = async () => {
  const events = await getData();
  console.log("events", events);
  //if(!events) return <LoadingOverlay />
  return (
    <>
      {events.map((e: any) => (
        <div>
          <h3>{e.title}</h3>
          <Link href={`/events/${e.slug}`}>READ MORE</Link>
        </div>
      ))}
    </>
  );
};
export default Blog;
