import { specialOffers } from "@/data";
import { SpecialOffersType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults = Number(searchParams.get("adults"));
   const children = Number(searchParams.get("children"));
   const day:string | undefined = searchParams.get("day")?.toString();
   
   const filterSpecialOffers:SpecialOffersType[] = specialOffers.filter((room) => {
      if(adults && children){
         return room.numberOfPeople >= adults + children 
      } else if (adults && children === 0){
         return room.numberOfPeople >= adults
      } else if (children && adults === 0){
         return room.numberOfPeople >= children
      } else if (children === 0 && adults === 0){
         return room
      } else if ((children + adults) > room.numberOfPeople){
         return null
      }
   })
   return NextResponse.json(filterSpecialOffers);
}