import Image from "next/image"
import Style from "./header.module.scss"
import { FC } from "react";
import { HeaderImagePNG } from "@/constants/public";


const HeaderImage:FC = () => {

   return (
      <Image src={HeaderImagePNG} alt="" width={1240} height={680} className={Style.headerImage}/>
   )
}

export default HeaderImage