import Image from "next/image"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Style from "./footer.module.scss"
import { HoteLogo } from "@/constants/public"

const getFooterTexts = async () => {
   const res = await fetch(`http://localhost:4200/footer`);
   const data = await res.json()
   return data 
}

const Footer = async () => {

   const data:string[] = await getFooterTexts()

   return(
      <footer className={Style.footer}>
         <div className={Style.footerDiv}>
         <div className={Style.topDiv}>
            <div className={Style.leftDiv}>
               <h3 className={Style.textH3}>Newsletter & Special Promo</h3>
               <div className={Style.inputDiv}>
                  <Input type={"text"} 
                     placeholder="Enter your email here"
                  />
                  <Button title={"Subscribe"} type={"button"} border/>
               </div>
            </div>
            <div className={Style.rightDiv}>
               <Image src={HoteLogo} alt="" width={156} height={82} className={Style.footerImg}/>
               <div className={Style.textsDiv}>
                  {data.map((text) =>(
                     <span className={Style.text} key={text}>{text}</span>
                  ))}
               </div>
            </div>
         </div>
         <div className={Style.bottomDiv}>
            <p className={Style.bottumP}>© Copyright Booking Hotels. All right reserved.</p>
         </div>
         </div>
      </footer>
   )
}

export default Footer