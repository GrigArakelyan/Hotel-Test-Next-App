import { usePathname } from "next/navigation";

export const useIsActive = () => {
   const pathName = usePathname()
   const isActive = pathName;
   return isActive
}