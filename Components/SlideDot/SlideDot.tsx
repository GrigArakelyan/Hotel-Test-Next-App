import { HeaderSlideDot } from "@/constants/public"
import Image from "next/image"
import Style from "./slideDot.module.scss"

const SlideDot = () => {

   
   return (
      <>
         <Image src={HeaderSlideDot} width={8} height={8} alt="" className={Style.slideDot}/>
         <Image src={HeaderSlideDot} width={8} height={8} alt="" className={Style.slideDot}/>
         <Image src={HeaderSlideDot} width={8} height={8} alt="" className={Style.slideDot}/>
      </>
   )
}

export default SlideDot