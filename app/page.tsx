import BestOffer from "@/Components/BestOffer/BestOffer"
import HotelRooms from "@/Components/HotelRooms/HotelRooms"
import RoomBooking from "@/Components/RoomBooking/RoomBooking"
import { FC } from "react"

type HotelRoomsProp = {
  searchParams: {
     adults: number;
     children: number;
     day: string;
  }
}

const Home:FC<HotelRoomsProp> = ({searchParams}) => {

  return (
    <div>
      <RoomBooking />
      <HotelRooms searchParams={searchParams}/>
      <BestOffer searchParams={searchParams}/>
    </div>
  )
}

export default Home
