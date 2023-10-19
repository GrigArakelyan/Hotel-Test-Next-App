import { categories } from "@/data";
import { RoomItemType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults: number | undefined = Number(searchParams.get("adults"));
   const children: number | undefined = Number(searchParams.get("children"));
   const day:string | undefined = searchParams.get("day")?.toString();



   const rooms = categories;


   const filterRooms:RoomItemType[] = rooms.filter(room => {
      if(adults && children){
         return (room.quantity.adults >= adults && room.quantity.children >= children)
      }
   })
   return NextResponse.json(filterRooms);
}