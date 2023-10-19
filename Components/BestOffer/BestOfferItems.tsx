import { SpecialOffersType } from "@/types/types";
import Style from "./bestOffer.module.scss"
import { FC } from "react"
import BestOfferItem from "./BestOfferItem/BestOfferItem";


type BestOfferItemProps = {
   data: SpecialOffersType[];
}
const BestOfferItems:FC<BestOfferItemProps> = ({data}) => {
   return (
      <div className={data.length === 1 ? Style.itemsOneDiv : data.length === 2  ? Style.itemstwoDiv :Style.itemsDiv}>
         {data.map((item) => (
            <BestOfferItem key={item.id} item={item}/>
         ))}
      </div>
   )
}
export default BestOfferItems