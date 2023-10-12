import { FC } from "react"
import RoomSelect from "./RoomSelect/RoomSelect"
import Style from "./roomSelects.module.scss"


type RoomSelectsProps = {
   control: any;
}
const RoomSelects:FC<RoomSelectsProps> = ({control}) => {
   return (
      <div className={Style.selectsDiv}>
         <p className={Style.pSelects}>Person</p>
         <div className={Style.selects}>
            <RoomSelect src={"/Vector.svg"} name={"Adults"} control={control} />
            <RoomSelect src={"/Frame.svg"} name={"Children"} control={control} />
         </div>
      </div>
   )
}

export default RoomSelects