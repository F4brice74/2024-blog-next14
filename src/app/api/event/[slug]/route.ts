import { Event, IEventApe } from "@/src/lib/models";
import { connectToDB } from "@/src/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: any }) => {
  const { slug } = params;
  try {
    connectToDB();
    const event = await Event.findOne({ slug });
    console.log("event*******************",event);
    return NextResponse.json(event);
  } catch (error) {
    console.log("error");
  }
};
