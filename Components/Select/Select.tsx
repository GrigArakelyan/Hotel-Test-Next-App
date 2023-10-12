import Style from "./select.module.scss"
import Image from "next/image"
import { FC } from "react";

type SelectProps = {
   src: string;
   name: string;
}

const Select:FC<SelectProps> = ({src, name}) => {
   return (
      <div className={Style.selectDiv}>
         {src && <Image src={src} alt="" width={23} height={23} className={Style.selectIMG}/>}
         <p className={Style.selectName}>{name}</p>
         <select name={name} id="" className={Style.select}>{name}
            <option className={Style.option} value={0}>{` ${'0'} `}</option>
            <option className={Style.option} value={1}>{` ${'1'} `}</option>
            <option className={Style.option} value={2}>{` ${'2'} `}</option>
            <option className={Style.option} value={3}>{` ${'3'} `}</option>
            <option className={Style.option} value={4}>{` ${'4'} `}</option>
            <option className={Style.option} value={5}>{` ${'5'} `}</option>
            <option className={Style.option} value={6}>{` ${'6'} `}</option>
            <option className={Style.option} value={7}>{` ${'7'} `}</option>  
         </select>
      </div>
   )
}
export default Select