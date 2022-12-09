import { MagnifyingGlassCircleIcon, BellIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   useEffect(() => {
      const handelScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handelScroll);

      return () => {
         window.removeEventListener("scroll", handelScroll);
      };
   }, []);
   return (
      <header className={`${isScrolled && "bg-[#141414]"}`}>
         <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain"></img>
         </div>
         <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Show</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
         </ul>
         <div className="flex items-center space-x-4 text-sm font-light">
            <MagnifyingGlassCircleIcon className="hidden h-6 w-6 sm:inline" />
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6" />
            <Link href="/account">
               <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded" />
            </Link>
         </div>
      </header>
   );
}

export default Header;
