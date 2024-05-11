import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json()
    const { firstName, lastName, email, phone, gender, course, age, join } = res;

    const result = await prisma.student.create({
        data: {
            firstName, lastName, email, phone, gender, course, age, join
        }
    })
    console.log(res);
    return NextResponse.json({ result })
}