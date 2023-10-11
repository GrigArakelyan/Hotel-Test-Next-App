import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import RoomItem from "./Item/RoomItem";
import OtherRooms from "./Item/OtherRooms";
import Link from "next/link";
import { FC } from "react";
import { getTypeHotelRooms } from "@/services/fetch";



const HotelRooms:FC = async () => {

   const rooms:RoomItemType[] = await getTypeHotelRooms();
   const bigRooms:RoomItemType[] = rooms.filter(room => room.type === "big");
   const smallRooms:RoomItemType[] = rooms.filter(room => room.type === "small");
   console.log(bigRooms)
   
   
   return (
      <div className={Style.hotelRoomsDiv}>
         <div className={bigRooms.length ? Style.itemsDiv : Style.notBigRoom}>
            <div className={bigRooms.length ? Style.bigRoom : Style.none}>
            {bigRooms.length && bigRooms.map((item) => (
               <Link href={item.href}>
                  <RoomItem room={item}/>
               </Link>
            ))}
            </div>
            <div className={bigRooms.length ? Style.smallRoom : Style.notBigItem}>
            {smallRooms.length && smallRooms.map((item) => (
               <Link href={item.href}>
                  <OtherRooms room={item} />
               </Link>
            ))}
            </div>
         </div> 
      </div>
   )
}

export default HotelRooms