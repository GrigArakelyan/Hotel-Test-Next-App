import { FC } from "react"
import Button from "../Button/Button"
import RoomBookingDate from "./RoomBookingDate/RoomBookingDate"
import RoomBookingSelects from "./RoomBookingSelects/RoomBookingSelects"
import Style from "./roomBooking.module.scss"

const RoomBooking:FC = () => {

   return(
      <div className={Style.roomBooking}>
         <div className={Style.titleDiv}>
            <h1 className={Style.h1}>Book a Room</h1>
            <p className={Style.p}>Discover the perfect space for you!</p>
         </div>
         <div className={Style.reservationDiv}>
            <RoomBookingDate />
            <RoomBookingSelects />
            <Button title={"BOOK NOW"} type="button"/>
         </div>
      </div>
   )
}

export default RoomBooking