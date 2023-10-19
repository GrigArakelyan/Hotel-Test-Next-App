import { specialOffers } from "@/data";
import { SpecialOffersType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults = Number(searchParams.get("adults"));
   const children = Number(searchParams.get("children"));
   const day:string | undefined = searchParams.get("day")?.toString();

   const offers = specialOffers;
   
   const filterSpecialOffers:SpecialOffersType[] = offers.filter((room) => {
      if(adults && children){
         return room.numberOfPeople >= adults + children 
      }
   })
   return NextResponse.json(filterSpecialOffers);
}