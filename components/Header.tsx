import Image from "next/image"
import { BellIcon, MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from "react"




// this was a HELLLLL TO WRITE!!!!!!!!!!!
function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () =>{
             
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }    

     }, [])


  return  ( 
    <header className={`${isScrolled && '[bg-#3050505]'}`}>
        {/* Left Div */}
        <div className="flex items-center space-x-2 md:space-x-10">
            
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New Releases</li>  
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
                
            </ul>
        </div>
        {/* Right Div */}

        <div className="flex items-center space-x-4 text-sm font-light">
           <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
            <img
            src=""
            alt="" 
            className="cursor-pointer rounded"/>
            <UsersIcon className="h-6 w-6"/>
                  

            </Link>
            

        </div>
    </header>                                    
    
  )
  }


export default Header