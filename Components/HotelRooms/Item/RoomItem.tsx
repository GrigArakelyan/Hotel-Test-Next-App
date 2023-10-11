import Image from "next/image"
import Style from "./item.module.scss"
import { FC } from "react"
import { RoomItemType } from "@/types/types";


type RoomItemProps = {
   room: RoomItemType
}

const RoomItem:FC<RoomItemProps> = ({room}) => {
   const {src, lable} = room;

   return (
      <div className={Style.roomsitem} key={room.lable}>
         <Image src={`/${src}`} width={470} height={760} alt="" className={Style.itemImage}/>
         <h1 className={Style.itemLabel}>{lable}</h1>
      </div>
   )
}

export default RoomItem