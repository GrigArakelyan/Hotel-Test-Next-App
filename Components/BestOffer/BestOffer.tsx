import { SpecialOffersType } from "@/types/types";
import BestOfferItem from "./BestOfferItem/BestOfferItem"
import BestOfferTitle from "./BestOfferTitle/BestOfferTitle"
import Style from "./bestOffer.module.scss"
import { FC } from "react";


const getSpecialOffers = async () => {
   const res = await fetch(`http://localhost:4200/special-Offers`);
   const data = res.json();
   return data
}

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