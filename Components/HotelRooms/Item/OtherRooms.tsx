import Image from "next/image"
import Style from "./item.module.scss"
import { FC } from "react"
import { RoomItemType } from "@/types/types";


type RoomItemProps = {
   room: RoomItemType
}

const OtherRooms:FC<RoomItemProps> = ({room}) => {
   const {src, lable, href} = room;

   return (
      <div className={Style.otherRoomsItem} key={lable}>
         <Image src={`/${src}`} width={500} height={375} alt={`${src}`} className={Style.itemImage}/>
         <h1 className={Style.itemLabel}>{lable}</h1>
      </div>
   )
}

export default OtherRooms