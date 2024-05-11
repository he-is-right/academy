
import prisma from '@/lib/prisma'


export default async function getStudents() {
    const students = await prisma.student.findMany({})
    return students;
}
