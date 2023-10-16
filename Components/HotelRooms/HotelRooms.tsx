import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import { FC } from "react";
import { getTypeHotelRooms } from "@/services/fetch";
import HotelItems from "./HotelItems";


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
   
   
   return (
      <div className={Style.hotelRoomsDiv}>
         {filterRooms.length ? 
         <HotelItems roomsData={filterRooms}/>
         :
         <HotelItems roomsData={rooms}/>}  
      </div>
   )
}

export default HotelRooms