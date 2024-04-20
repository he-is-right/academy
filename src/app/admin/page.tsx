import Link from "next/link"
export default function Dashboard() {
    return <>
        <aside className="flex flex-col gap-4 w-[15%] h-[90vh] bg-[#f5f5f5] pl-8 py-4 my-4 rounded-lg">
            <Link href="/home">Students</Link>
            <Link href="">Team</Link>
            <Link href="">News Letter</Link>
        </aside>
        <div>

        </div>
    </>
}