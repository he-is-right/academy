import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
    const res = await request.json();
    const {email} = res

    const result = await prisma.newsLetter.create({
        data: {
            email: email
        }
    })
    return NextResponse.json({result})
}