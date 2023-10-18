import { RoomItemType } from "@/types/types";
import Style from "./hotelRooms.module.scss"
import { FC } from "react";
import { getTypeHotelRooms, getfilterRooms } from "@/services/fetch";
import HotelItems from "./HotelItems";


type HotelRoomsProp = {
   searchParams: {
      adults: number;
      children: number;
      day: string;
   }
}
const HotelRooms:FC<HotelRoomsProp> = async ({searchParams}) => {
   const {adults, children, day} = searchParams

   const rooms:RoomItemType[] = await getTypeHotelRooms();
   const filterRooms:RoomItemType[] = await getfilterRooms(adults, children, day)
   
   
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