import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import RoomItem from "./Item/RoomItem";
import OtherRooms from "./Item/OtherRooms";
import Link from "next/link";
import { FC } from "react";
import { getTypeHotelRooms } from "@/services/fetch";


type HotelRoomsProp = {
   searchParams: {
      adults: string | undefined;
      children: string | undefined;
      day: string;
   }
}
const HotelRooms:FC<HotelRoomsProp> = async ({searchParams}) => {
   const {adults, children, day} = searchParams

   const rooms:RoomItemType[] = await getTypeHotelRooms();
   const filterRooms:RoomItemType[] = rooms.filter((room) => {
      if(adults && children && room.quantity.adults <= +adults && room.quantity.children <= +children){
         return room
      }
      if(adults && !children && room.quantity.adults <= +adults){
         return room 
      }
      if(!adults && children && room.quantity.adults <= +children){
         return room 
      }
      if(adults && children && +adults === 0 && +children === 0 && day === "Invalid Date"){
         return room
      }
   })


   const bigRooms:RoomItemType[] = rooms.filter(room => room.type === "big");
   const smallRooms:RoomItemType[] = rooms.filter(room => room.type === "small");

   const filterBigRooms:RoomItemType[] = filterRooms.filter(room => room.type === "big");
   const filterSmallRooms:RoomItemType[] = filterRooms.filter(room => room.type === "small");
   
   
   return (
      <div className={Style.hotelRoomsDiv}>
         {filterRooms.length ? 
            <div className={filterBigRooms.length ? Style.itemsDiv : Style.notBigRoom}>
               <div className={filterBigRooms.length ? Style.bigRoom : Style.none}>
                  {filterBigRooms.length && filterBigRooms.map((item) => (
                     <Link href={item.href}>
                        <RoomItem room={item}/>
                     </Link>
                  ))}
               </div>
               <div className={filterBigRooms.length ? Style.smallRoom : Style.notBigItem}>
                  {filterSmallRooms.length && filterSmallRooms.map((item) => (
                     <Link href={item.href}>
                        <OtherRooms room={item} />
                     </Link>
                  ))}
               </div>
            </div> 
            :
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
         }  
      </div>
   )
}

export default HotelRooms