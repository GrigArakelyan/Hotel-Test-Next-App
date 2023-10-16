import { SpecialOffersType } from "@/types/types";
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";
import { getSpecialOffers } from "@/services/fetch";
import BestOfferItems from "./BestOfferItems";


type SpecialOffersProp = {
   searchParams:{
      adults: string | undefined;
      children: string | undefined;
      day: string;
   }
}

const BestOffer:FC<SpecialOffersProp> = async ({searchParams}) => {

   const {adults, children, day} = searchParams;

   const data:SpecialOffersType[] = await getSpecialOffers();

   const filterSpecialOffersData = data.filter((room) => {
      if(adults && children&& room.numberOfPeople >= +adults + +children){
         return room 
      }
      if(adults && !children && room.numberOfPeople >= +adults){
         return room
      }
      if(!adults && children && room.numberOfPeople >= +children){
         return room 
      }
      if(adults && children && +adults === 0 && +children === 0 && day === "Invalid Date"){
         return room
      }
   })

   return(
      <div className={Style.container}>
         <BestOfferTitle />
            {filterSpecialOffersData.length ? 
            <BestOfferItems data={filterSpecialOffersData} />
            :
            <BestOfferItems data={data} />}
      </div>
   )
}

export default BestOffer