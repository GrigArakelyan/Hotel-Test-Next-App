import { FC } from "react"
import Select from "../../Select/Select"
import Style from "./RoomBookingSelects.module.scss"


const RoomBookingSelects:FC = () => { 

   return(
      <div className={Style.selects}>
         <p className={Style.pSelect}>Person</p>
            <div className={Style.selectDiv}>
               <Select src={'/Vector.svg'} name={"Adults"} />
               <Select src={'/Frame.svg'} name={"Children"} />
            </div>
      </div>   
   )
}

export default RoomBookingSelects