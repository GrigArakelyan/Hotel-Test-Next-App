import BasicSelect from "@/Components/SelectMUI/BasicSelect";
import Image from "next/image"
import { FC } from "react"
import Style from "../roomSelects.module.scss"

type RoomSelectProps = {
   src: string;
   name: string;
   control: any
}

const RoomSelect:FC<RoomSelectProps> = ({src, name, control}) => {
   return(
      <div className={Style.select}>
         <Image src={src} width={24} height={24} alt=""/>
         <p className={Style.pSelect}>{name}</p>
         <BasicSelect control={control} name={name}/>
      </div>
   )
}

export default RoomSelect