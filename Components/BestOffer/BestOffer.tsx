import { SpecialOffersType } from "@/types/types";
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";
import { getSpecialOffers, getfilterSpecialOffers } from "@/services/fetch";
import BestOfferItems from "./BestOfferItems";


type SpecialOffersProp = {
   searchParams:{
      adults: number | undefined;
      children: number | undefined;
      day: string | undefined;
   }
}

const BestOffer:FC<SpecialOffersProp> = async ({searchParams}) => {

   const {adults, children, day} = searchParams;

   let specialOffersData:SpecialOffersType[] = await getSpecialOffers();
   if(adults && children && day){
      specialOffersData = await getfilterSpecialOffers(adults, children, day);
   }

   return(
      <div className={Style.container}>
         <BestOfferTitle />
         {specialOffersData.length ? <BestOfferItems data={specialOffersData} /> : null}
      </div>
   )
}

export default BestOffer