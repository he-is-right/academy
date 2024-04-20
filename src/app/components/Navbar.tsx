"use client";
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.png"

import React, { useEffect, useState } from "react"

export default function Navbar() {
    // Scroll function for sticky navbar
    const [header, setHeader] = useState(false)
    const [isActive, setisActive] = useState(false)
    const toggleNav = (): void => {
        setisActive(!isActive)
    }
    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.addEventListener('scroll', scrollHeader)

        }
    }, [])
    return <>
        <header className={header ? "md:fixed w-[100%] bg-[white] shadow z-40" : "bg-[transparent] shadow"}>
            <div className="flex w-[95%] justify-between items-center mx-auto py-5">
                <div className="w-[35%] md:w-[12%]">
                    <Link href="/">
                        <Image src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNav}>{!isActive ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>}</button>
                </div>
                <ul className={!isActive ? 'absolute top-[-100%] md:hidden' : 'absolute flex flex-col top-[4rem] gap-[2.5rem] bg-white w-full z-40 left-0 py-8 px-2 md:hidden'}>
                    <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/">Home</Link></li>
                    <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/about">About</Link></li>
                    <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/emerge">Emerge</Link></li>
                    <li><Link className="bg-[#01303F] hover:bg-[#01516c] text-white text-center py-2 px-4 rounded font-bold" href="/student-register">Register Now</Link></li>
                </ul>
                <nav className="hidden md:block">
                    <ul className="flex gap-[2.5rem]">
                        <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/">Home</Link></li>
                        <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/about">About</Link></li>
                        <li><Link className="text-[#01303F] hover:text-[#01516c]" href="/emerge">Emerge</Link></li>
                        <li><Link className="bg-[#01303F] hover:bg-[#01516c] text-white text-center py-2 px-4 rounded font-bold" href="/student-register">Register Now</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}