"use client"
import { useIsActive } from "@/hook/useIsActive"
import Image from "next/image"
import Link from "next/link"
import Style from './navigation.module.scss'
import { ABOUT, HOME, NEWSLETTER, PRICING, ROOMS, SERVICES } from "@/constants/rout"
import { HoteLogo } from "@/constants/public"

const Navigation = () => {

   const isActive = useIsActive()
   return (
      <>
         <Link href={HOME} className={isActive === HOME ? Style.active : Style.navLink}>Home</Link>
         <Link href={ABOUT} className={isActive === ABOUT ? Style.active : Style.navLink}>About</Link>
         <Link href={NEWSLETTER} className={isActive === NEWSLETTER ? Style.active : Style.navLink}>Newsletter</Link>
         <Image src={HoteLogo} alt="" width={78} height={42} className={Style.headerLogo}/>
         <Link href={ROOMS} className={isActive === ROOMS ? Style.active : Style.navLink}>Rooms</Link>
         <Link href={SERVICES} className={isActive === SERVICES ? Style.active : Style.navLink}>Services</Link>
         <Link href={PRICING} className={isActive === PRICING ? Style.active : Style.navLink}>Pricing</Link>
      </>
   )
}

export default Navigation