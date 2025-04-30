'use client'
import logoDev from "@/assets/imgs/logo_dev.png"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black flex justify-end items-center p-2 rounded-bl-xl">
            <div className='flex justify-end mr-3 text-[#808089]'>
                Copyright© Desenvolvido por
            </div>
            <Image src={logoDev} alt="" className="mr-3 w-10 h-8 bg-neutral-700 rounded-lg"/>
        </footer>
    )
}