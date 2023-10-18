import { specialOffers } from "@/data";
import { SpecialOffersType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   const { searchParams } = new URL(req.url);
   const adults = searchParams.get("adults");
   const children = searchParams.get("children");
   const day = searchParams.get("day");

   const offers = specialOffers;
   
   const filterSpecialOffers:SpecialOffersType[] = offers.filter((room) => {
      if(adults&& children&& room.numberOfPeople >= +adults + +children){
         return room 
      }
      if(adults&& children&& +children === 0 && room.numberOfPeople >= +adults){
         return room
      }
      if(adults&& children&& +adults === 0 &&  room.numberOfPeople >= +children){
         return room 
      }
      if(adults&& children&& +adults === 0 && +children === 0){
         return room
      }
   })
   return NextResponse.json(filterSpecialOffers);
}