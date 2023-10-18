import { SpecialOffersType } from "@/types/types";
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";
import { getSpecialOffers, getfilterSpecialOffers } from "@/services/fetch";
import BestOfferItems from "./BestOfferItems";


type SpecialOffersProp = {
   searchParams:{
      adults: number;
      children: number ;
      day: string;
   }
}

const BestOffer:FC<SpecialOffersProp> = async ({searchParams}) => {

   const {adults, children, day} = searchParams;

   const data:SpecialOffersType[] = await getSpecialOffers();
   const filterSpecialOffersData:SpecialOffersType[] = await getfilterSpecialOffers(adults, children, day);

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