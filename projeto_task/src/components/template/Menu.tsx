'use client'

import { useState } from "react"
import Image from "next/image";
import LogoZhaz from '@/assets/imgs/logo_zhaz.png';
import Logo from '@/assets/imgs/logo.png';

export default function Menu() {

    const [menu, setMenu] = useState(false)

    function mudarMenu() {
        setMenu(!menu)
    }

    return (
        <div className={`bg-black rounded-r-xl ${menu ? "w-20 transition-all duration-500 easy-linear group hover:w-52" : "w-52 transition-all duration-500 easy-linear"}`}>
            <div className="flex items-center overflow-hidden ">
                <Image src={Logo} alt="logo_zhaz" className={`mt-3 w-18 h-12 ${menu ? "group-hover:mr-0" : ""}`}/>
                <Image src={LogoZhaz} alt="logo_zhaz" className={`mt-3 w-12 h-12 grow ${menu ? "opacity-0 transition-opacity duration-700 group-hover:opacity-100" : ""}`}/>
            </div>
            <div className="text-white">
                menu
            </div>
            <button className="text-white bg-orange-400 cursor-pointer" onClick={mudarMenu}>Menu</button>
        </div>
    )
}