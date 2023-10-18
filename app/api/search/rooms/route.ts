import { categories } from "@/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults = searchParams.get("adults");
   const children = searchParams.get("children");
   const day = searchParams.get("day");

   const rooms = categories

   const filterRooms = rooms.filter((room) => {
      if(adults && children &&  room.quantity.adults <= +adults && room.quantity.children <= +children) {
         return room
      }
      if(adults && children && +children === 0 && room.quantity.adults <= +adults){
         return room
      }
      if(adults && children && +adults === 0 && room.quantity.children <= +children){
         return room
      }
      if(adults && children && day && +adults === 0 && +children === 0 && day === "Invalid Date"){
         return room
      }
   })
   return NextResponse.json(filterRooms);
}