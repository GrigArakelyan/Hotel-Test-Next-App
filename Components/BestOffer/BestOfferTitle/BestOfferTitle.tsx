import Link from "next/link";
import  Style  from "./bestOfferTitle.module.scss";

const BestOfferTitle = () => {
   return (
      <div className={Style.titleFlex}>
         <div className={Style.leftTitleFlex}>
            <h1 className={Style.leftH1}>Special Offers</h1>
            <h2 className={Style.leftH2}>Best offer of the month</h2>
            <p className={Style.leftP}>Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website</p>
         </div>
         <div className={Style.rightTitleFlex}>
            <Link href={"/special-offers"} className={Style.Link}>
               <p className={Style.rightP}>View all</p>
            </Link>
         </div>
      </div>
   )
}

export default BestOfferTitle