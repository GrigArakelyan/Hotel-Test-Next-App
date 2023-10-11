import { SpecialOffersType } from "@/types/types";
import BestOfferItem from "./BestOfferItem/BestOfferItem"
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";
import { getSpecialOffers } from "@/services/fetch";




const BestOffer:FC = async () => {

   const data:SpecialOffersType[] = await getSpecialOffers();

   return(
      <div className={Style.container}>
         <BestOfferTitle />
         <div className={Style.itemsDiv}>
            {data.map((item) => (
               <BestOfferItem item={item}/>
            ))}
         </div>
      </div>
   )
}

export default BestOffer