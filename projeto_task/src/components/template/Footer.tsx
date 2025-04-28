'use client'
import logoDev from "@/assets/imgs/logo_dev.png"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-white flex justify-end items-center p-2">
            <div className='flex justify-end mr-3'>
                Copyright© Desenvolvido por
            </div>
            <Image src={logoDev} alt="" className="mr-3 w-10 h-8"/>
        </footer>
    )
}