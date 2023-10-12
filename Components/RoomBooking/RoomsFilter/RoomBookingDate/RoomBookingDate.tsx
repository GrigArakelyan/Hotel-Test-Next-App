import { FC } from "react"
import Style from "./roomBookingDate.module.scss"
import Image from "next/image"

type RoomBookingDateProps = {

   handleOpen: () => void;

}
const RoomBookingDate:FC<RoomBookingDateProps> = ({handleOpen}) => { 

   return(
      <div className={Style.dateDiv} onClick={handleOpen}>
         <p className={Style.pDate}>Date</p>
         <div className={Style.date}>
            <Image src={"/Date.svg"} width={ 24} height={24} alt="" className={Style.image} />
            <p className={Style.pSubTitle}>Check Available</p>
         </div>
      </div>   
   )
}

export default RoomBookingDate