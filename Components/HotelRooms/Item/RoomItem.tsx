import Image from "next/image"
import Style from "./item.module.scss"
import { FC } from "react"
import Link from "next/link";
import { RoomItemType } from "@/types/types";


type RoomItemProps = {
   room: RoomItemType
}

const RoomItem:FC<RoomItemProps> = ({room}) => {
   const {src, lable, href} = room;

   return (
      <Link href={href}>
         <div className={Style.roomsitem}>
            <Image src={`/${src}`} width={470} height={760} alt="" className={Style.itemImage}/>
            <h1 className={Style.itemLabel}>{lable}</h1>
         </div>
      </Link>
   )
}

export default RoomItem