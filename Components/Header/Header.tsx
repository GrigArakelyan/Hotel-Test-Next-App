import Style from "./header.module.scss"
import Navigation from "../Navigation/Navigation"
import SlideDot from "../SlideDot/SlideDot"
import { FC } from "react"
import HeaderImage from "./HeaderImage"


const Header:FC = async () => {



   return (

      
      <header className={Style.header}>
         <div className={Style.headerDiv}>
            <HeaderImage />
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