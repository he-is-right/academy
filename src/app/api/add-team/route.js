import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
    const res = await request.json()
    const { name, firstName, lastName, email, phone, gender, numberOfStudents, age, role } = res;

    const result = await prisma.team.create({
        data: {
            name, firstName, lastName, email, phone, gender, numberOfStudents, age, role
        }
    })
    // console.log(res);
    return NextResponse.json({result})
}