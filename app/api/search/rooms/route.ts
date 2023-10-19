import { categories } from "@/data";
import { RoomItemType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults: number | undefined = Number(searchParams.get("adults"));
   const children: number | undefined = Number(searchParams.get("children"));
   const day:string | undefined = searchParams.get("day")?.toString();

   const filterRooms:RoomItemType[] = categories.filter(room => {
      if(adults && children){
         return (room.quantity.adults >= adults && room.quantity.children >= children)
      } else if(adults && children === 0){
         return (room.quantity.adults >= adults)
      } else if (children && adults === 0){
         return (room.quantity.adults >= children)
      } 
   })
   return NextResponse.json(filterRooms);
}