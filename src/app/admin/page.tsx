"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { remult } from "remult";

export default function Dashboard() {
    return <>
        <div className="flex gap-4">
            <aside className="flex flex-col gap-4 w-[15%] h-[90vh] bg-[#f5f5f5] pl-8 py-4 my-4 rounded-lg">
                <Link href="/home">Students</Link>
                <Link href="">Team</Link>
                <Link href="">News Letter</Link>
            </aside>
            <div className="bg-[#f5f5f5] rounded-lg w-[82%] rounded-lg pl-8 py-4 my-4">
                <h1>All Students</h1>

            </div>
        </div>
    </>
}