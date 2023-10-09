import { FC } from "react"
import Style from "./roomBookingDate.module.scss"
import Image from "next/image"


const RoomBookingDate:FC = () => { 

   return(
      <div className={Style.dateDiv}>
         <p className={Style.pDate}>Date</p>
         <div className={Style.date}>
            <Image src={"/Date.svg"} width={ 24} height={24} alt="" className={Style.image}/>
            <p className={Style.pSubTitle}>Check Available</p>
         </div>
      </div>   
   )
}

export default RoomBookingDate