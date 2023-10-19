"use client"
import { FC, useState } from "react"
import RoomBookingDate from "./RoomBookingDate/RoomBookingDate"
import Button from "@/Components/Button/Button"
import Style from "../roomBooking.module.scss"
import RoomSelects from "./RoomSelects/RoomSelects"
import { useForm } from "react-hook-form"
import BasicModal from "@/Components/Modal/Modal"
import { FilterRoomsType } from "@/types/types"
import { useRouter } from "next/navigation"
import { HOME } from "@/constants/rout"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"




const RoomsFilter:FC = () => {
   const router = useRouter()

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   
   const {control, handleSubmit} = useForm();


   const filterRoom:(data:FilterRoomsType) => void = (data) => {
      const adapter = new AdapterDayjs() 
      const day: string | undefined = adapter.date(data.day)?.format('DD/MM/YYYY') || adapter.date(new AdapterDayjs())?.format('DD/MM/YYYY')
      router.push(`${HOME}?adults=${data.adults}&children=${data.children}&day=${day}`)
   }

   
   return (
      <form action={HOME} className={Style.reservationDiv} onSubmit={handleSubmit(filterRoom as any)}>
         <RoomBookingDate handleOpen={handleOpen}/>
         <BasicModal handleClose={handleClose} open={open} control={control} name={"day"}/>
         <RoomSelects control={control}/>
         <div className={Style.buttonDiv}>
            <Button title={"BOOK NOW"} type="submit" />
         </div>
      </form>
   )
}

export default RoomsFilter