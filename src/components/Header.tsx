
import { FaCartPlus } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";


export default function Header() {
  return (
   <header className="w-full h-[60px] flex justify-between items-center">
    <div className="flex justify-center items-center">
        <SheetSide/>
    <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
            
            <Link href={""}> <NavigationMenuDemo/></Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
        </li>
    </ul>
       <div className="hidden md:block">
       <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
        <FaSearchengin className="text-xl ml-2"/>
        <input placeholder="search item..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#F0F0F0]"></input>
        </div>
       </div>
        <div className="flex items-center mr-7 space-x-5">
        <FaSearchengin className="text-xl ml-2 md:hidden"/>
        <FaCartPlus className="texl-2xl"/>
        <FaRegUserCircle className="texl-2xl"/>
        </div>
   </header>
  );
}