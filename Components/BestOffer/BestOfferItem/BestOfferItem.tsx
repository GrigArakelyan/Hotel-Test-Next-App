import { SpecialOffersType } from "@/types/types";
import  Style  from "./bestOfferItem.module.scss";
import { FC } from "react";
import Image from "next/image";


type BestOfferItemProps = {
   item: SpecialOffersType
}

const BestOfferItem:FC<BestOfferItemProps> = ({item}) => {

   const {categoty, kindOf, lable, numberOfPeople, price, src, text} = item

   return (
      <div className={Style.itemDiv} key={lable}>
         <div className={Style.itemBody}>
            <Image src={`/${src}`}  alt="" width={360} height={280} className={Style.itemImage}/>
            <div>
               <p className={Style.pCategory}>{categoty}</p>
               <div className={Style.titleDiv}>
                  <h1 className={Style.title}>{lable}</h1>
                  <div className={Style.peopleDiv}>
                     <Image src={`/Vector.svg`} width={13} height={16} alt="" className={Style.peopleImg}/>
                     <span className={Style.peopleNum}>{numberOfPeople}</span>
                  </div>
               </div>
                  <p className={Style.text}>{text}</p>
               <div className={Style.kindOfDiv}>
                  <p className={Style.price}>{`$${price}`}</p>
                  <p className={Style.kindOf}>{`/${kindOf}`}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BestOfferItem