"use client"
import { FC, FormEventHandler, useCallback, useState } from "react"
import RoomBookingDate from "./RoomBookingDate/RoomBookingDate"
import Button from "@/Components/Button/Button"
import Style from "../roomBooking.module.scss"
import RoomSelects from "./RoomSelects/RoomSelects"
import { useForm } from "react-hook-form"
import BasicModal from "@/Components/Modal/Modal"
import { FilterRoomsType, RoomItemType } from "@/types/types"
import { useRouter, useSearchParams } from "next/navigation"
import { HOME } from "@/constants/rout"




const RoomsFilter:FC = () => {
   const router = useRouter()

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   
   const {control, handleSubmit} = useForm();


   const filterRoom:(data:FilterRoomsType) => void = (data) => {
      router.push(`${HOME}?adults=${data.adults}&children=${data.children}&day=${data.day}`)
   }

   
   return (
      <form action={HOME} className={Style.reservationDiv} onSubmit={handleSubmit(filterRoom as any)}>
         <RoomBookingDate handleOpen={handleOpen}/>
         <BasicModal handleClose={handleClose} open={open} control={control} name={"day"}/>
         <RoomSelects control={control}/>
         <div className={Style.buttonDiv}>
            <Button title={"BOOK NOW"} type="submit"/>
         </div>
      </form>
   )
}

export default RoomsFilter