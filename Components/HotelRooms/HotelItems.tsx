import Link from "next/link"
import { FC } from "react"
import RoomItem from "./Item/RoomItem"
import OtherRooms from "./Item/OtherRooms"
import Style from "./hotelRooms.module.scss"
import { RoomItemType } from "@/types/types"


type HotelItemProps = {
   roomsData: RoomItemType[]
}

const HotelItems:FC<HotelItemProps> = ({roomsData}) =>{

   const bigRoomData:RoomItemType[] = roomsData.filter(room => room.type === "big");
   const smallRoomData:RoomItemType[] = roomsData.filter(room => room.type === "small");


   return (
      <div className={bigRoomData.length ? Style.itemsDiv : Style.notBigRoom}>
         <div className={bigRoomData.length ? Style.bigRoom : Style.none}>
            {bigRoomData.length && bigRoomData.map((item) => (
               <Link href={item.href}>
                  <RoomItem key={item.id} room={item}/>
               </Link>
            ))}
         </div>
         <div className={bigRoomData.length ? (smallRoomData.length ? Style.smallRoom : Style.none) : Style.smallRoom2 }>
            {smallRoomData.length && smallRoomData.map((item) => (
               <Link href={item.href}>
                  <OtherRooms key={item.id} room={item} />
               </Link>
            ))}
         </div>
      </div> 
   )
}

export default HotelItems