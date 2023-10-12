import { FC } from "react"
import Style from "./roomBooking.module.scss"
import RoomsFilter from "./RoomsFilter/RoomsFilter"

const RoomBooking:FC = () => {

   return(
      <div className={Style.roomBooking}>
         <div className={Style.titleDiv}>
            <h1 className={Style.h1}>Book a Room</h1>
            <p className={Style.p}>Discover the perfect space for you!</p>
         </div>
         <RoomsFilter />
      </div>
   )
}

export default RoomBooking