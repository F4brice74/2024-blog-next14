import { IEventApe } from "@/src/lib/models";
import { LoadingOverlay } from "@mantine/core";
import React from "react";

const getData = async (slug: string) : Promise<IEventApe> => {
  const res = await fetch(`http://localhost:3000/api/event/${slug}/`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const SingleEventPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const event = await getData(slug);

  console.log("event in slug", event)
  //if(!event)return <LoadingOverlay />

  return (
    <>
      <h1>{event.title}</h1><p>{event.description}</p>
      <img src={event.imageUrl}/>
    </>
  );
};

export default SingleEventPage;
