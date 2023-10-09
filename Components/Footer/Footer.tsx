import Image from "next/image"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Style from "./footer.module.scss"
import { HoteLogo } from "@/constants/public"

const Footer = () => {
   return(
      <footer className={Style.footer}>
         <div className={Style.footerDiv}>
         <div className={Style.topDiv}>
            <div className={Style.leftDiv}>
               <h3>Newsletter & Special Promo</h3>
               <div className={Style.inputDiv}>
                  <Input/>
                  <Button />
               </div>
            </div>
            <div className={Style.rightDiv}>
               <Image src={HoteLogo} alt="" width={156} height={82}/>
               <div>
                  
               </div>
            </div>
         </div>
         <div className={Style.bootomDiv}>
            
         </div>
         </div>
      </footer>
   )
}

export default Footer