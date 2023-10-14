import { SpecialOffersType } from "@/types/types";
import BestOfferItem from "./BestOfferItem/BestOfferItem"
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";
import { getSpecialOffers } from "@/services/fetch";


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
   })

   return(
      <div className={Style.container}>
         <BestOfferTitle />
         {filterSpecialOffersData.length ? 
            <div className={filterSpecialOffersData.length === 1 ? Style.itemsOneDiv :Style.itemsDiv}>
               {filterSpecialOffersData.map((item) => (
                  <BestOfferItem item={item}/>
               ))}
            </div>
         :
            <div className={Style.itemsDiv}>
               {data.map((item) => (
                  <BestOfferItem item={item}/>
               ))}
            </div>
         }
      </div>
   )
}

export default BestOffer