import Style from "./header.module.scss"
import Navigation from "../Navigation/Navigation"
import SlideDot from "../SlideDot/SlideDot"
import { FC } from "react"
import Image from "next/image"
import { HeaderImagePNG } from "@/constants/public"


const Header:FC = () => {

   return (
      <header className={Style.header}>
         <div className={Style.headerDiv}>
            <Image src={HeaderImagePNG} alt="" width={1240} height={680} className={Style.headerImage}/>
            <div className={Style.headerNavDiv}>
               <Navigation />
            </div>
            <div className={Style.h1Div}>
               <h1 className={Style.h1}>Discover Extraordinary Comfort in Hotels</h1>
            </div>
            <div className={Style.slideDots}>
               <SlideDot />
            </div>
         </div>
      </header>
   )
}
export default Header