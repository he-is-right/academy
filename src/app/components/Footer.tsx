import Link from "next/link"
import logo from "../../../public/logo.png"
import Image from "next/image"

export default function Footer() {
    return <>
        <footer className="bg-[#f5f5f5] w-[100%]">
            <div className="py-4 flex items-center justify-between text-sm w-[95%] mx-auto text-[#01303F]">
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copyright"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
                    <h1>Copyright 2024</h1>
                </div>
                <div className="w-[30%] md:w-[10%]">
                    <Link href="/">
                        <Image src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
        </footer>
    </>
}