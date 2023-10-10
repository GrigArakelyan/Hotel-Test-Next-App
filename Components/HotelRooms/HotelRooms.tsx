import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import RoomItem from "./Item/RoomItem";
import OtherRooms from "./Item/OtherRooms";
import Link from "next/link";
import { FC } from "react";

const getTypeHotelRooms = async () => {
   const res = await fetch(`http://localhost:4200/categori`);
   const data = res.json();
   return data 
}

const HotelRooms:FC = async () => {

   const rooms:RoomItemType[] = await getTypeHotelRooms();
   const room = rooms.filter(room => room.category === "rooms")
   const atherRooms = rooms.filter(room => room.category !== "rooms");

   return (
      <div className={Style.hotelRoomsDiv}>
         {rooms.length % 2 === 1 ? 
            <div className={Style.itemsFlexDiv}>
               <div className={Style.roomDiv}>
                  <Link href={room[0].href}>
                     <RoomItem room={room[0]}/>
                  </Link>
               </div>
               <div className={Style.otherRoomsDiv}>
                  {atherRooms.map((room) => (
                     <Link href={room.href}>
                        <OtherRooms room={room} />
                     </Link>
                  ))}
               </div>
            </div> : 
            <div className={Style.rooms}>
               {rooms.map((room) => (
                     <OtherRooms room={room} />
               ))}
            </div>
         }
      </div>
   )
}

export default HotelRooms