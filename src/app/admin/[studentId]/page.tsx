export default function StudentDetails({ params, }: {
    params: { studentId: string };
}) {
    return <h1 className="bg-black font-bold">Student {params.studentId} Details Page</h1>
}