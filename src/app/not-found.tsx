import Link from "next/link"

export default function NotFound() {
    return <>
        <div className="text-center _secondary py-[80%] md:py-[16%]">
            <h1 className="_primary text-4xl font-bold">404</h1>
            <h1 className="font-bold text-lg">Page not found</h1>
            <Link className="hover:underline text-[#0080ff]" href="/">Return to Home</Link>
        </div>
    </>
}